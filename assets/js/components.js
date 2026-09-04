function header() {

    const path = location.pathname;
    const base = path.includes("/products/") ? "../" : "";

    return `
        <header class="header">
            <div class="container nav">

                <a class="logo" href="${base}index.html">
                    <span>🌿</span> Agro<span>Fresh</span>
                </a>

                <nav>
                    <a href="${base}index.html">Home</a>
                    <a href="${base}about.html">About Us</a>
                    <a href="${base}products.html">Products</a>
                    <a href="${base}export-markets.html">Export Markets</a>
                    <a href="${base}quality.html">Quality</a>
                    <a href="${base}export-process.html">Process</a>
                    <a href="${base}resources.html">Resources</a>
                    <a href="${base}contact.html">Contact</a>
                </nav>

                <a
                    class="btn btn-primary nav-cta"
                    href="${base}request-quote.html"
                >
                    Request a Quote
                </a>

                <button class="menu-btn" aria-label="Menu">
                    ☰
                </button>

            </div>
        </header>
    `;
}


function footer() {

    const path = location.pathname;
    const base = path.includes("/products/") ? "../" : "";

    return `
        <footer class="footer">

            <div class="container footer-grid">

                <div>

                    <a class="logo footer-logo" href="${base}index.html">
                        <span>🌿</span> Agro<span>Fresh</span>
                    </a>

                    <p>
                        Reliable supplier and exporter of premium Pakistani
                        agricultural products for international markets.
                    </p>

                </div>


                <div>

                    <h4>Quick Links</h4>

                    <a href="${base}about.html">About Us</a>
                    <a href="${base}products.html">Products</a>
                    <a href="${base}export-markets.html">Export Markets</a>
                    <a href="${base}quality.html">Quality</a>
                    <a href="${base}export-process.html">Process</a>

                </div>


                <div>

                    <h4>Products</h4>

                    <a href="${base}products/potato.html">Potato</a>
                    <a href="${base}products/onion.html">Onion</a>
                    <a href="${base}products/tomato.html">Tomato</a>
                    <a href="${base}products/green-chilli.html">Green Chilli</a>
                    <a href="${base}products/pink-salt.html">Pink Salt</a>

                </div>


                <div>

                    <h4>Contact</h4>

                    <p>📍 [Pakistan Office]</p>
                    <p>✉ sales@pktrades.com</p>
                    <p>☎ +92 3557028001</p>

                    <a href="${base}contact.html">
                        Contact our team →
                    </a>

                </div>

            </div>


            <div class="container footer-bottom">

                <span>
                    © 2026 AgroFresh. All Rights Reserved.
                </span>

                <span>
                    Privacy Policy • Terms & Conditions
                </span>

            </div>

        </footer>
    `;
}


/* ==============================
   LOAD HEADER
   ============================== */

const headerElement = document.getElementById("site-header");

if (headerElement) {
    headerElement.innerHTML = header();
}


/* ==============================
   LOAD FOOTER
   ============================== */

const footerElement = document.getElementById("site-footer");

if (footerElement) {
    footerElement.innerHTML = footer();
}