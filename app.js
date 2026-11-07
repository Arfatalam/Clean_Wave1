
// ==========================================
// CLEAN WAVE - MAIN JAVASCRIPT
// Products, Cart, Clerk Checkout, WhatsApp
// Offline Printable Invoice Generator
// Mobile-Friendly Checkout
// ==========================================

const WHATSAPP_NUMBER = "919724656591";
const CART_KEY = "cleanWaveCart";

// ==========================================
// PRODUCT COLLECTION
// ==========================================

const products = [

    // INDUSTRIAL PRODUCTS
    {
        id: 1,
        name: "RO Antiscalant",
        category: "industrial",
        price: 450,
        unit: "1 Litre",
        image: "https://wallpapers.com/images/hd/industrial-background-1920-x-1080-c098arg81f5juqke.jpg"
    },
    {
        id: 2,
        name: "RO Descaling",
        category: "industrial",
        price: 380,
        unit: "1 Litre",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 3,
        name: "Boiler Anti Scaling",
        category: "industrial",
        price: 520,
        unit: "1 Litre",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 4,
        name: "Boiler pH Booster",
        category: "industrial",
        price: 350,
        unit: "1 Litre",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 5,
        name: "Boiler Descaling",
        category: "industrial",
        price: 420,
        unit: "1 Litre",
        image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 6,
        name: "Cooling Tower Chemicals",
        category: "industrial",
        price: 490,
        unit: "1 Litre",
        image: "https://images.unsplash.com/photo-1567789884554-01798e348b17?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 7,
        name: "Chiller Plant Chemicals",
        category: "industrial",
        price: 550,
        unit: "1 Litre",
        image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 8,
        name: "Water Softener Chemicals",
        category: "industrial",
        price: 400,
        unit: "1 Litre",
        image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 9,
        name: "Oxygen Scavenger",
        category: "industrial",
        price: 480,
        unit: "1 Litre",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 10,
        name: "Scouring Agent",
        category: "industrial",
        price: 360,
        unit: "1 Litre",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 11,
        name: "Low-pH Chemicals",
        category: "industrial",
        price: 300,
        unit: "1 Litre",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 12,
        name: "High-pH Chemicals",
        category: "industrial",
        price: 320,
        unit: "1 Litre",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=700&q=85"
    },

    // HOUSEHOLD PRODUCTS
    {
        id: 13,
        name: "Liquid Hand Wash",
        category: "household",
        price: 90,
        unit: "500 ml",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 14,
        name: "Floor Cleaner",
        category: "household",
        price: 110,
        unit: "1 Litre",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 15,
        name: "Dishwash Liquid",
        category: "household",
        price: 85,
        unit: "500 ml",
        image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 16,
        name: "Glass Cleaner",
        category: "household",
        price: 95,
        unit: "500 ml",
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 17,
        name: "Toilet Cleaner",
        category: "household",
        price: 90,
        unit: "500 ml",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 18,
        name: "Multipurpose Cleaner",
        category: "household",
        price: 120,
        unit: "1 Litre",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=85"
    },

    // CAR WASH PRODUCTS
    {
        id: 19,
        name: "Car Shampoo",
        category: "car-wash",
        price: 180,
        unit: "1 Litre",
        image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 20,
        name: "Snow Foam Wash",
        category: "car-wash",
        price: 250,
        unit: "1 Litre",
        image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 21,
        name: "Dashboard Polish",
        category: "car-wash",
        price: 160,
        unit: "500 ml",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 22,
        name: "Tyre Polish",
        category: "car-wash",
        price: 150,
        unit: "500 ml",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 23,
        name: "Car Glass Cleaner",
        category: "car-wash",
        price: 130,
        unit: "500 ml",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 24,
        name: "Interior Cleaner",
        category: "car-wash",
        price: 170,
        unit: "500 ml",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=85"
    }
];

// ==========================================
// CART FUNCTIONS
// ==========================================

function getCart() {
    try {
        const cart = JSON.parse(localStorage.getItem(CART_KEY));
        return Array.isArray(cart) ? cart : [];
    } catch (error) {
        console.error("Cart loading error:", error);
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
        (sum, item) => sum + Number(item.quantity || 0),
        0
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
        cart.push({
            id: Number(productId),
            quantity: 1
        });
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

// ==========================================
// DISPLAY PRODUCTS
// ==========================================

function renderProducts() {
    const grid = document.getElementById("productGrid");

    if (!grid) return;

    const category = grid.dataset.category || "all";

    const filtered = category === "all"
        ? products
        : products.filter(
            product => product.category === category
        );

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

                    <p class="product-category">
                        ${product.category.replace("-", " ")}
                    </p>

                    <p class="product-price">
                        ₹${product.price}
                        <small>/ ${product.unit}</small>
                    </p>

                    ${
                        quantity > 0
                        ? `
                            <div class="product-quantity">

                                <button
                                    type="button"
                                    onclick="changeQuantity(${product.id}, -1)"
                                >−</button>

                                <span>${quantity}</span>

                                <button
                                    type="button"
                                    onclick="changeQuantity(${product.id}, 1)"
                                >+</button>

                            </div>
                        `
                        : `
                            <button
                                type="button"
                                class="add-to-cart"
                                onclick="addToCart(${product.id})"
                            >
                                Add to Cart
                            </button>
                        `
                    }

                </div>
            </article>
        `;
    }).join("");
}

// ==========================================
// DISPLAY CART
// ==========================================

function renderCart() {
    const cartList = document.getElementById("cartList");
    const cartSummary = document.getElementById("cartSummary");

    if (!cartList || !cartSummary) return;

    const cartProducts = getCart().map(item => {
        const product = products.find(
            p => Number(p.id) === Number(item.id)
        );

        return product
            ? { ...product, quantity: Number(item.quantity) }
            : null;

    }).filter(Boolean);

    updateCartCount();

    if (!cartProducts.length) {
        cartList.innerHTML = `
            <div class="cart-empty">
                <h2>Your cart is empty</h2>
                <p>Add products to your cart to see your order here.</p>
                <a href="index.html#products">Explore Categories</a>
            </div>
        `;

        cartSummary.innerHTML = "";
        return;
    }

    cartList.innerHTML = cartProducts.map(product => `
        <article class="cart-item">

            <div class="cart-item-image">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/300x250/eaf5ff/062b50?text=CLEAN+WAVE';"
                >
            </div>

            <div class="cart-item-details">

                <h3>${product.name}</h3>

                <p class="cart-unit">${product.unit}</p>

                <p class="cart-price">
                    ₹${product.price} each
                </p>

                <button
                    type="button"
                    class="remove-btn"
                    onclick="removeFromCart(${product.id})"
                >
                    Remove
                </button>

            </div>

            <div class="cart-item-actions">

                <div class="quantity-control">

                    <button
                        type="button"
                        onclick="changeQuantity(${product.id}, -1)"
                    >−</button>

                    <span>${product.quantity}</span>

                    <button
                        type="button"
                        onclick="changeQuantity(${product.id}, 1)"
                    >+</button>

                </div>

                <div class="cart-item-subtotal">
                    ₹${(product.price * product.quantity).toFixed(2)}
                </div>

            </div>

        </article>
    `).join("");

    const totalItems = cartProducts.reduce(
        (sum, product) => sum + product.quantity,
        0
    );

    const subtotal = cartProducts.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
    );

    cartSummary.innerHTML = `
        <div class="cart-summary-card">

            <h2>Order Summary</h2>

            <div class="summary-row">
                <span>Total Items</span>
                <strong>${totalItems}</strong>
            </div>

            <div class="summary-row">
                <span>Subtotal</span>
                <strong>₹${subtotal.toFixed(2)}</strong>
            </div>

            <div class="summary-row">
                <span>Delivery</span>
                <strong>To be confirmed</strong>
            </div>

            <div class="summary-total">
                <span>Total</span>
                <span>₹${subtotal.toFixed(2)}</span>
            </div>

            <button
                type="button"
                class="checkout-btn"
                onclick="checkoutWhatsApp()"
            >
                Order on WhatsApp
            </button>

        </div>
    `;
}

// ==========================================
// INVOICE NUMBER
// ==========================================

function createInvoiceNumber() {
    const today = new Date();

    const datePart = [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, "0"),
        String(today.getDate()).padStart(2, "0")
    ].join("");

    const storageKey = `cleanWaveInvoiceSequence_${datePart}`;

    const nextNumber =
        Number(localStorage.getItem(storageKey) || 0) + 1;

    localStorage.setItem(storageKey, String(nextNumber));

    return `CW-${datePart}-${String(nextNumber).padStart(3, "0")}`;
}

// ==========================================
// SAFELY DISPLAY CUSTOMER / PRODUCT TEXT
// ==========================================

function escapeInvoiceHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

// ==========================================
// OFFLINE PRINTABLE INVOICE
// ==========================================

function generateInvoicePDF(order, invoiceTab) {

    if (!invoiceTab || invoiceTab.closed) {
        throw new Error("Please allow pop-ups to open your invoice.");
    }

    const rows = order.items.map(item => `
        <tr>
            <td>${escapeInvoiceHTML(item.name)}</td>
            <td>${escapeInvoiceHTML(item.unit)}</td>
            <td>${item.quantity}</td>
            <td>INR ${Number(item.price).toFixed(2)}</td>
            <td>INR ${(item.price * item.quantity).toFixed(2)}</td>
        </tr>
    `).join("");

    const html = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>${escapeInvoiceHTML(order.invoiceNumber)} - CLEAN WAVE</title>

        <style>
            * {
                box-sizing: border-box;
            }

            body {
                font-family: Arial, sans-serif;
                color: #26384a;
                margin: 0;
                padding: 20px;
                background: #f2f5f8;
            }

            .invoice {
                max-width: 850px;
                margin: auto;
                padding: 30px;
                background: white;
            }

            .header {
                background: #083d69;
                color: white;
                padding: 25px;
                display: flex;
                justify-content: space-between;
                gap: 15px;
            }

            .header h1 {
                margin: 0 0 8px;
            }

            .header p {
                margin: 5px 0;
            }

            .details {
                display: flex;
                justify-content: space-between;
                gap: 20px;
                margin: 30px 0;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 25px;
            }

            th {
                background: #e8f1f9;
                color: #083d69;
            }

            th, td {
                padding: 12px 8px;
                border: 1px solid #dce4ec;
                text-align: left;
                font-size: 13px;
            }

            .total {
                text-align: right;
                font-size: 20px;
                font-weight: bold;
                margin-top: 25px;
                color: #083d69;
            }

            .note {
                margin-top: 35px;
                padding: 15px;
                background: #f3f7fa;
                font-size: 12px;
                line-height: 1.6;
            }

            .actions {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 12px;
                margin: 25px auto;
            }

            .action-btn {
                display: inline-block;
                padding: 14px 22px;
                border: 0;
                border-radius: 7px;
                color: white;
                font-weight: bold;
                cursor: pointer;
                text-decoration: none;
                font-size: 14px;
                text-align: center;
            }

            .download-btn {
                background: #083d69;
            }

            .whatsapp-btn {
                background: #168b45;
            }

            @media print {
                body {
                    padding: 0;
                    background: white;
                }

                .invoice {
                    padding: 15px;
                }

                .actions {
                    display: none;
                }
            }

            @media(max-width: 600px) {
                body {
                    padding: 8px;
                }

                .invoice {
                    padding: 12px;
                }

                .header {
                    flex-direction: column;
                }

                .details {
                    flex-direction: column;
                }

                th, td {
                    padding: 6px 3px;
                    font-size: 10px;
                }

                .action-btn {
                    width: 100%;
                }
            }
        </style>
    </head>

    <body>

        <main class="invoice">

            <div class="header">

                <div>
                    <h1>CLEAN WAVE</h1>
                    <p>INDUSTRIAL & CLEANING CHEMICALS</p>
                    <p>Palsana, Surat, Gujarat, India</p>
                </div>

                <div>
                    <h2>INVOICE</h2>
                    <p>PROVISIONAL ORDER REQUEST</p>
                </div>

            </div>

            <div class="details">

                <div>
                    <strong>Invoice Number:</strong><br>
                    ${escapeInvoiceHTML(order.invoiceNumber)}

                    <br><br>

                    <strong>Invoice Date:</strong><br>
                    ${escapeInvoiceHTML(order.dateText)}
                </div>

                <div>
                    <strong>BILL TO</strong><br>
                    ${escapeInvoiceHTML(order.customerName)}
                    <br>
                    ${escapeInvoiceHTML(order.customerEmail)}
                </div>

            </div>

            <table>

                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Unit</th>
                        <th>Qty</th>
                        <th>Rate</th>
                        <th>Amount</th>
                    </tr>
                </thead>

                <tbody>
                    ${rows}
                </tbody>

            </table>

            <div class="total">
                Estimated Total: INR ${Number(order.total).toFixed(2)}
            </div>

            <div class="note">
                This is a provisional order invoice, not a GST tax invoice
                or proof of payment. Product availability, delivery charges,
                applicable taxes and final payable amount must be confirmed
                by CLEAN WAVE.
            </div>

            <div class="actions">

                <button
                    class="action-btn download-btn"
                    onclick="window.print()"
                >
                    Download / Save Invoice PDF
                </button>

                <button
                    class="action-btn whatsapp-btn"
                    onclick="continueToWhatsApp()"
                >
                    Continue to WhatsApp
                </button>

            </div>

        </main>

        <script>
            function continueToWhatsApp() {

                const whatsappUrl = ${JSON.stringify(order.whatsappUrl)};

                try {
                    if (
                        window.opener &&
                        !window.opener.closed &&
                        typeof window.opener.cleanWaveCompleteCheckout === "function"
                    ) {
                        window.opener.cleanWaveCompleteCheckout();
                    } else {
                        localStorage.setItem("cleanWaveCart", "[]");
                    }
                } catch (error) {
                    console.error("Cart update error:", error);
                }

                window.location.href = whatsappUrl;
            }
        <\/script>

    </body>
    </html>
    `;

    invoiceTab.document.open();
    invoiceTab.document.write(html);
    invoiceTab.document.close();

    return true;
}

// ==========================================
// WHATSAPP CHECKOUT + INVOICE
// ==========================================

async function checkoutWhatsApp() {

    const cart = getCart();

    if (!cart.length) {
        alert("Your cart is empty.");
        return;
    }

    // Open one invoice tab from the customer's click.
    const invoiceTab = window.open("about:blank", "_blank");

    if (!invoiceTab) {
        alert("Please allow pop-ups for CLEAN WAVE and try again.");
        return;
    }

    try {

        // CHECK CLERK INITIALIZATION
        if (!window.cleanWaveClerkReady) {
            throw new Error(
                "Clerk is not initialized. Please refresh the page."
            );
        }

        const clerk = await window.cleanWaveClerkReady;

        // CHECK LOGIN
        if (!clerk.isSignedIn || !clerk.user) {

            invoiceTab.close();

            window.location.href =
                "login.html?next=" +
                encodeURIComponent("cart.html");

            return;
        }

        // CUSTOMER INFORMATION
        const user = clerk.user;

        const customerName =
            user.fullName ||
            user.firstName ||
            "CLEAN WAVE Customer";

        const customerEmail =
            user.primaryEmailAddress?.emailAddress || "";

        // GET PRODUCT DETAILS
        const items = cart.map(item => {

            const product = products.find(
                p => Number(p.id) === Number(item.id)
            );

            if (!product) return null;

            return {
                id: product.id,
                name: product.name,
                unit: product.unit,
                price: Number(product.price),
                quantity: Number(item.quantity)
            };

        }).filter(Boolean);

        if (!items.length) {
            throw new Error("No valid products found in cart.");
        }

        // CALCULATE TOTAL
        const total = items.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );

        const now = new Date();

        const invoiceNumber = createInvoiceNumber();

        // CREATE ORDER DETAILS
        const order = {
            invoiceNumber,
            dateText: now.toLocaleDateString("en-IN"),
            customerName,
            customerEmail,
            items,
            total
        };

        // CREATE WHATSAPP MESSAGE
        const orderLines = items.map(item =>
            `${item.name} (${item.unit}) x ${item.quantity} = INR ${(item.price * item.quantity).toFixed(2)}`
        );

        const message = [
            "Hello CLEAN WAVE, I would like to place an order.",
            "",
            `Invoice Reference: ${invoiceNumber}`,
            `Customer: ${customerName}`,
            `Email: ${customerEmail || "Not provided"}`,
            "",
            "ORDER DETAILS:",
            ...orderLines,
            "",
            `Total Items: ${items.reduce(
                (sum, item) => sum + item.quantity,
                0
            )}`,
            `Estimated Product Total: INR ${total.toFixed(2)}`,
            "",
            "I have generated the provisional invoice. Please confirm product availability, delivery charges, applicable taxes and final amount."
        ].join("\n");

        order.whatsappUrl =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

        // GENERATE INVOICE.
        // CART IS NOT CLEARED AT THIS STAGE.
        generateInvoicePDF(order, invoiceTab);

    } catch (error) {

        console.error("CLEAN WAVE CHECKOUT ERROR:", error);

        if (invoiceTab && !invoiceTab.closed) {
            invoiceTab.close();
        }

        alert(
            error.message ||
            "Checkout failed. Please try again."
        );
    }
}

// ==========================================
// CLEAR CART WHEN CUSTOMER CONTINUES TO WHATSAPP
// ==========================================

window.cleanWaveCompleteCheckout = function() {

    saveCart([]);

    renderCart();
    renderProducts();
    updateCartCount();

};

// ==========================================
// MOBILE NAVIGATION
// ==========================================

function setupMobileMenu() {

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (!menuToggle || !navbar) return;

    menuToggle.addEventListener("click", () => {

        const isOpen = navbar.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });

    navbar.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

    document.addEventListener("click", event => {

        if (
            !navbar.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navbar.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });
}

// ==========================================
// PAGE INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    updateCartCount();

    renderProducts();

    renderCart();

    setupMobileMenu();

});
