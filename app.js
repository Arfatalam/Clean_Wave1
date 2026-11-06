
const WHATSAPP_NUMBER = "9724656591";
const CART_KEY = "cleanWaveCart";

// Example prices. Confirm actual prices before publishing.
const products = [
    // INDUSTRIAL
    { id: 1, name: "RO Antiscalant", category: "industrial", price: 450, unit: "1 Litre", image: "https://wallpapers.com/images/hd/industrial-background-1920-x-1080-c098arg81f5juqke.jpg" },
    { id: 2, name: "RO Descaling", category: "industrial", price: 380, unit: "1 Litre", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=85" },
    { id: 3, name: "Boiler Anti Scaling", category: "industrial", price: 520, unit: "1 Litre", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=700&q=85" },
    { id: 4, name: "Boiler pH Booster", category: "industrial", price: 350, unit: "1 Litre", image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=700&q=85" },
    { id: 5, name: "Boiler Descaling", category: "industrial", price: 420, unit: "1 Litre", image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=700&q=85" },
    { id: 6, name: "Cooling Tower Chemicals", category: "industrial", price: 490, unit: "1 Litre", image: "https://images.unsplash.com/photo-1567789884554-01798e348b17?auto=format&fit=crop&w=700&q=85" },
    { id: 7, name: "Chiller Plant Chemicals", category: "industrial", price: 550, unit: "1 Litre", image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=700&q=85" },
    { id: 8, name: "Water Softener Chemicals", category: "industrial", price: 400, unit: "1 Litre", image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=700&q=85" },
    { id: 9, name: "Oxygen Scavenger", category: "industrial", price: 480, unit: "1 Litre", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=700&q=85" },
    { id: 10, name: "Scouring Agent", category: "industrial", price: 360, unit: "1 Litre", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=85" },
    { id: 11, name: "Low-pH Chemicals", category: "industrial", price: 300, unit: "1 Litre", image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=700&q=85" },
    { id: 12, name: "High-pH Chemicals", category: "industrial", price: 320, unit: "1 Litre", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=700&q=85" },

    // HOUSEHOLD
    { id: 13, name: "Liquid Hand Wash", category: "household", price: 90, unit: "500 ml", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85" },
    { id: 14, name: "Floor Cleaner", category: "household", price: 110, unit: "1 Litre", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=700&q=85" },
    { id: 15, name: "Dishwash Liquid", category: "household", price: 85, unit: "500 ml", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=700&q=85" },
    { id: 16, name: "Glass Cleaner", category: "household", price: 95, unit: "500 ml", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=85" },
    { id: 17, name: "Toilet Cleaner", category: "household", price: 90, unit: "500 ml", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=85" },
    { id: 18, name: "Multipurpose Cleaner", category: "household", price: 120, unit: "1 Litre", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=85" },

    // CAR WASH
    { id: 19, name: "Car Shampoo", category: "car-wash", price: 180, unit: "1 Litre", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=700&q=85" },
    { id: 20, name: "Snow Foam Wash", category: "car-wash", price: 250, unit: "1 Litre", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=700&q=85" },
    { id: 21, name: "Dashboard Polish", category: "car-wash", price: 160, unit: "500 ml", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=85" },
    { id: 22, name: "Tyre Polish", category: "car-wash", price: 150, unit: "500 ml", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=85" },
    { id: 23, name: "Car Glass Cleaner", category: "car-wash", price: 130, unit: "500 ml", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=85" },
    { id: 24, name: "Interior Cleaner", category: "car-wash", price: 170, unit: "500 ml", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=85" }
];

function getCart() {
    try {
        const cart = JSON.parse(localStorage.getItem(CART_KEY));
        return Array.isArray(cart) ? cart : [];
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const countElement = document.getElementById("cartCount");
    if (!countElement) return;

    const total = getCart().reduce(
        (sum, item) => sum + Number(item.quantity || 0), 0
    );

    countElement.textContent = total;
}

function getProductQuantity(productId) {
    const item = getCart().find(
        item => Number(item.id) === Number(productId)
    );

    return item ? Number(item.quantity) : 0;
}

function addToCart(productId) {
    const cart = getCart();
    const existing = cart.find(
        item => Number(item.id) === Number(productId)
    );

    if (existing) {
        existing.quantity = Number(existing.quantity) + 1;
    } else {
        cart.push({ id: Number(productId), quantity: 1 });
    }

    saveCart(cart);
    renderProducts();
    renderCart();
}

function changeQuantity(productId, change) {
    let cart = getCart();

    const item = cart.find(
        item => Number(item.id) === Number(productId)
    );

    if (!item) return;

    item.quantity = Number(item.quantity) + Number(change);

    if (item.quantity <= 0) {
        cart = cart.filter(
            item => Number(item.id) !== Number(productId)
        );
    }

    saveCart(cart);
    renderProducts();
    renderCart();
}

function removeFromCart(productId) {
    const cart = getCart().filter(
        item => Number(item.id) !== Number(productId)
    );

    saveCart(cart);
    renderProducts();
    renderCart();
}

function renderProducts() {
    const grid = document.getElementById("productGrid");
    if (!grid) return;

    const category = grid.dataset.category || "all";

    const filtered = category === "all"
        ? products
        : products.filter(product => product.category === category);

    grid.innerHTML = filtered.map(product => {
        const quantity = getProductQuantity(product.id);

        return `
            <article class="product-card">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/600x400/eaf5ff/062b50?text=CLEAN+WAVE';"
                >

                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-category">${product.category.replace("-", " ")}</p>

                    <p class="product-price">
                        ₹${product.price} <small>/ ${product.unit}</small>
                    </p>

                    ${
                        quantity > 0
                        ? `
                            <div class="product-quantity">
                                <button type="button" onclick="changeQuantity(${product.id}, -1)">−</button>
                                <span>${quantity}</span>
                                <button type="button" onclick="changeQuantity(${product.id}, 1)">+</button>
                            </div>
                        `
                        : `
                            <button type="button" class="add-to-cart" onclick="addToCart(${product.id})">
                                Add to Cart
                            </button>
                        `
                    }
                </div>
            </article>
        `;
    }).join("");
}

function renderCart() {
    const cartList = document.getElementById("cartList");
    const cartSummary = document.getElementById("cartSummary");
    if (!cartList || !cartSummary) return;
    const cartProducts = getCart().map(item => {
        const product = products.find(p => Number(p.id) === Number(item.id));
        return product ? { ...product, quantity: Number(item.quantity) } : null;
    }).filter(Boolean);
    updateCartCount();
    if (!cartProducts.length) {
        cartList.innerHTML = `<div class="cart-empty"><h2>Your cart is empty</h2><p>Add products to your cart to see your order here.</p><a href="index.html#products">Explore Categories</a></div>`;
        cartSummary.innerHTML = "";
        return;
    }
    cartList.innerHTML = cartProducts.map(product => `
        <article class="cart-item">
            <div class="cart-item-image"><img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/300x250/eaf5ff/062b50?text=CLEAN+WAVE';"></div>
            <div class="cart-item-details"><h3>${product.name}</h3><p class="cart-unit">${product.unit}</p><p class="cart-price">₹${product.price} each</p><button type="button" class="remove-btn" onclick="removeFromCart(${product.id})">Remove</button></div>
            <div class="cart-item-actions"><div class="quantity-control"><button type="button" onclick="changeQuantity(${product.id}, -1)">−</button><span>${product.quantity}</span><button type="button" onclick="changeQuantity(${product.id}, 1)">+</button></div><div class="cart-item-subtotal">₹${(product.price * product.quantity).toFixed(2)}</div></div>
        </article>`).join("");
    const totalItems = cartProducts.reduce((s,p) => s+p.quantity, 0);
    const subtotal = cartProducts.reduce((s,p) => s+p.price*p.quantity, 0);
    cartSummary.innerHTML = `<div class="cart-summary-card"><h2>Order Summary</h2><div class="summary-row"><span>Total Items</span><strong>${totalItems}</strong></div><div class="summary-row"><span>Subtotal</span><strong>₹${subtotal.toFixed(2)}</strong></div><div class="summary-row"><span>Delivery</span><strong>To be confirmed</strong></div><div class="summary-total"><span>Total</span><span>₹${subtotal.toFixed(2)}</span></div><button type="button" class="checkout-btn" onclick="checkoutWhatsApp()">Order on WhatsApp</button></div>`;
}


async function checkoutWhatsApp() {
    const cart = getCart();

    if (!cart.length) {
        alert("Your cart is empty.");
        return;
    }

    // Open a tab immediately to avoid popup blocking.
    const waTab = window.open("about:blank", "_blank");

    try {
        // Check Clerk authentication.
        if (!window.cleanWaveClerkReady) {
            throw new Error("Login system is not ready. Please refresh the page.");
        }

        const clerk = await window.cleanWaveClerkReady;

        // If the customer is not logged in, redirect to login.
        if (!clerk.isSignedIn || !clerk.user) {
            if (waTab) waTab.close();

            window.location.href =
                "login.html?next=" + encodeURIComponent("cart.html");
            return;
        }

        // Get customer details.
        const user = clerk.user;
        const customerName =
            user.fullName || user.firstName || "CLEAN WAVE Customer";

        const customerEmail =
            user.primaryEmailAddress?.emailAddress || "";

        // Prepare order items.
        const orderLines = cart.map(item => {
            const product = products.find(
                p => Number(p.id) === Number(item.id)
            );

            return product
                ? `${product.name} (${product.unit}) x ${item.quantity} = ₹${product.price * item.quantity}`
                : "";
        }).filter(Boolean);

        // Calculate total.
        const total = cart.reduce((sum, item) => {
            const product = products.find(
                p => Number(p.id) === Number(item.id)
            );

            return sum + (
                product
                    ? product.price * Number(item.quantity)
                    : 0
            );
        }, 0);

        // Create WhatsApp order message.
        const message = [
            "Hello CLEAN WAVE, I would like to place an order.",
            "",
            `Customer: ${customerName}`,
            `Email: ${customerEmail}`,
            "",
            "ORDER DETAILS:",
            ...orderLines,
            "",
            `Total Items: ${cart.reduce((sum, item) => sum + Number(item.quantity), 0)}`,
            `Estimated Total: ₹${total}`,
            "",
            "Please confirm availability and delivery charges."
        ].join("\n");

        const whatsappUrl =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp.
        if (waTab) {
            waTab.location.href = whatsappUrl;
        } else {
            // Fallback if popup is blocked.
            window.location.href = whatsappUrl;
        }

        // Clear cart after opening WhatsApp with the order details.
        saveCart([]);
        renderCart();
        renderProducts();
        updateCartCount();

    } catch (error) {
        if (waTab) waTab.close();

        alert(
            error.message ||
            "Unable to process your order. Please try again."
        );
    }
}


function setupMobileMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (!menuToggle || !navbar) return;

    menuToggle.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navbar.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("click", event => {
        if (
            !navbar.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            navbar.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    renderProducts();
    renderCart();
    setupMobileMenu();
});
