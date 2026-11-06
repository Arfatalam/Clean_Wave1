/* CLEAN WAVE - Clerk authentication for plain HTML/CSS/JavaScript */
(function () {
  "use strict";

  const KEY = window.CLEAN_WAVE_CLERK_PUBLISHABLE_KEY;
  const DEFAULT_AFTER_AUTH = "index.html";

  function safeNextUrl() {
    const next = new URLSearchParams(window.location.search).get("next");
    if (!next || next.startsWith("//") || /^[a-z]+:/i.test(next)) return DEFAULT_AFTER_AUTH;
    return next;
  }

  function loadScript(src, attributes = {}) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.crossOrigin = "anonymous";
      Object.entries(attributes).forEach(([name, value]) => script.setAttribute(name, value));
      script.onload = resolve;
      script.onerror = () => reject(new Error("Could not load Clerk. Check your internet connection and Clerk domain settings."));
      document.head.appendChild(script);
    });
  }

  function getClerkFrontendDomain(publishableKey) {
    try {
      let encoded = publishableKey.split("_")[2];
      if (!encoded) throw new Error("Invalid publishable key format.");
      encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
      encoded += "=".repeat((4 - encoded.length % 4) % 4);
      let decoded = atob(encoded);
      decoded = decoded.replace(/\$$/, "");
      if (!decoded || !decoded.includes(".")) throw new Error("Could not read Clerk Frontend API domain from the key.");
      return decoded;
    } catch (error) {
      throw new Error("Your Clerk Publishable Key looks invalid. Copy the complete key from Clerk Dashboard > API Keys.");
    }
  }

  async function initializeClerk() {
    if (!KEY || KEY.includes("YOUR_CLERK")) {
      throw new Error("Add your Clerk Publishable Key in clerk-config.js before using login or signup.");
    }

    const domain = getClerkFrontendDomain(KEY);
    const baseUrl = `https://${domain}`;

    await loadScript(`${baseUrl}/npm/@clerk/ui@1/dist/ui.browser.js`);
    await loadScript(`${baseUrl}/npm/@clerk/clerk-js@6/dist/clerk.browser.js`, {
      "data-clerk-publishable-key": KEY
    });

    if (!window.Clerk) throw new Error("Clerk SDK did not initialize.");

    await window.Clerk.load({
      ui: { ClerkUI: window.__internal_ClerkUICtor },
      signInUrl: "login.html",
      signUpUrl: "signup.html",
      signInFallbackRedirectUrl: DEFAULT_AFTER_AUTH,
      signUpFallbackRedirectUrl: DEFAULT_AFTER_AUTH
    });

    window.cleanWaveClerk = window.Clerk;
    return window.Clerk;
  }

  window.cleanWaveClerkReady = initializeClerk();

  function addAuthNavigation(clerk) {
    const nav = document.getElementById("navbar");
    if (!nav) return;

    document.getElementById("cleanWaveAuthNav")?.remove();
    document.getElementById("cleanWaveUserButton")?.remove();

    if (clerk.isSignedIn && clerk.user) {
      const holder = document.createElement("span");
      holder.id = "cleanWaveUserButton";
      holder.className = "clerk-user-button-holder";
      nav.appendChild(holder);
      clerk.mountUserButton(holder, { afterSignOutUrl: "index.html" });
    } else {
      const link = document.createElement("a");
      link.id = "cleanWaveAuthNav";
      link.href = "login.html";
      link.className = "auth-nav-link";
      link.textContent = "Login / Sign Up";
      nav.appendChild(link);
    }
  }

  function showAuthError(error) {
    const target = document.getElementById("clerkError");
    if (target) target.textContent = error?.message || "Authentication could not be loaded.";
    console.error("CLEAN WAVE Clerk:", error);
  }

  async function setupAuthPage(clerk) {
    const signInRoot = document.getElementById("clerkSignIn");
    const signUpRoot = document.getElementById("clerkSignUp");

    if (signInRoot) {
      if (clerk.isSignedIn) {
        window.location.replace(safeNextUrl());
        return;
      }
      clerk.mountSignIn(signInRoot, {
        signUpUrl: "signup.html",
        fallbackRedirectUrl: safeNextUrl(),
        signUpFallbackRedirectUrl: "signup.html"
      });
    }

    if (signUpRoot) {
      if (clerk.isSignedIn) {
        window.location.replace(safeNextUrl());
        return;
      }
      clerk.mountSignUp(signUpRoot, {
        signInUrl: "login.html",
        fallbackRedirectUrl: safeNextUrl(),
        signInFallbackRedirectUrl: "login.html"
      });
    }

    const accountName = document.getElementById("accountName");
    const accountEmail = document.getElementById("accountEmail");
    const accountAvatar = document.getElementById("accountAvatar");
    const accountUserButton = document.getElementById("accountUserButton");

    if (accountName || accountEmail) {
      if (!clerk.isSignedIn || !clerk.user) {
        window.location.replace("login.html?next=" + encodeURIComponent("account.html"));
        return;
      }
      const user = clerk.user;
      if (accountName) accountName.textContent = user.fullName || user.firstName || "CLEAN WAVE customer";
      if (accountEmail) accountEmail.textContent = user.primaryEmailAddress?.emailAddress || "";
      if (accountAvatar) accountAvatar.textContent = (user.firstName || user.fullName || "CW").slice(0, 2).toUpperCase();
      if (accountUserButton) clerk.mountUserButton(accountUserButton, { afterSignOutUrl: "index.html" });
    }
  }

  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const clerk = await window.cleanWaveClerkReady;
      addAuthNavigation(clerk);
      await setupAuthPage(clerk);

      // Refresh the navigation if the signed-in user changes during this page view.
      if (typeof clerk.addListener === "function") {
        clerk.addListener(() => addAuthNavigation(clerk));
      }
    } catch (error) {
      showAuthError(error);
    }
  });
})();
