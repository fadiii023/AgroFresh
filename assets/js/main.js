document.addEventListener("DOMContentLoaded", () => {

    // ==================================================
    // HELPER
    // ==================================================

    const el = (id) => document.getElementById(id);


    // ==================================================
    // DATA SAFETY
    // ==================================================

    const products =
        typeof PRODUCTS !== "undefined" && Array.isArray(PRODUCTS)
            ? PRODUCTS
            : [];

    const features =
        typeof FEATURES !== "undefined" && Array.isArray(FEATURES)
            ? FEATURES
            : [];

    const process =
        typeof PROCESS !== "undefined" && Array.isArray(PROCESS)
            ? PROCESS
            : [];

    const markets =
        typeof MARKETS !== "undefined" && Array.isArray(MARKETS)
            ? MARKETS
            : [];

    const packaging =
        typeof PACKAGING !== "undefined" && Array.isArray(PACKAGING)
            ? PACKAGING
            : [];

    const faqs =
        typeof FAQS !== "undefined" && Array.isArray(FAQS)
            ? FAQS
            : [];


    // ==================================================
    // PRODUCT CARD
    // ==================================================

    const productCard = (p) => {

        const isProductPage =
            location.pathname.includes("/products/");

        const assetPath = isProductPage
            ? "../assets/images/"
            : "assets/images/";

        const linkPath = isProductPage
            ? "../"
            : "";

        return `
            <article
                class="product-card"
                data-category="${p.category || ""}"
            >

                <img
                    src="${assetPath}${p.image || ""}"
                    alt="${p.name || "Product"}"
                    loading="lazy"
                >

                <div class="product-body">

                    <span class="mini-label">
                        ${p.label || ""}
                    </span>

                    <h3>
                        ${p.name || ""}
                    </h3>

                    <p>
                        ${p.desc || ""}
                    </p>

                    <div class="card-meta">

                        <span>
                            🇵🇰 Pakistan
                        </span>

                        <span>
                            Export Grade
                        </span>

                    </div>

                    <a
                        class="text-link"
                        href="${linkPath}products/${p.slug}.html"
                    >
                        View Details →
                    </a>

                </div>

            </article>
        `;
    };


    // ==================================================
    // FEATURED PRODUCTS - HOME PAGE
    // ==================================================

    const featuredProducts = el("featured-products");

    if (featuredProducts) {

        if (products.length > 0) {

            featuredProducts.innerHTML =
                products
                    .slice(0, 5)
                    .map(productCard)
                    .join("");

        } else {

            console.error(
                "AgroFresh: PRODUCTS data was not loaded."
            );

        }
    }


    // ==================================================
    // ALL PRODUCTS - PRODUCTS PAGE
    // ==================================================

    const allProducts = el("all-products");

    if (allProducts) {

        if (products.length > 0) {

            allProducts.innerHTML =
                products
                    .map(productCard)
                    .join("");

        } else {

            console.error(
                "AgroFresh: PRODUCTS data was not loaded."
            );

        }


        // ==================================================
        // PRODUCT FILTER
        // ==================================================

        document
            .querySelectorAll(".filter")
            .forEach((button) => {

                button.addEventListener("click", () => {

                    document
                        .querySelectorAll(".filter")
                        .forEach((filterButton) => {
                            filterButton.classList.remove("active");
                        });

                    button.classList.add("active");

                    const selectedFilter =
                        button.dataset.filter;

                    document
                        .querySelectorAll(".product-card")
                        .forEach((card) => {

                            if (
                                selectedFilter === "all" ||
                                card.dataset.category === selectedFilter
                            ) {

                                card.style.display = "";

                            } else {

                                card.style.display = "none";

                            }

                        });

                });

            });

    }


    // ==================================================
    // FEATURES
    // ==================================================

    const featuresElement = el("features");

    if (featuresElement) {

        featuresElement.innerHTML =
            features
                .map((item) => {

                    return `
                        <article class="feature-card">

                            <span class="feature-icon">
                                ${item[0]}
                            </span>

                            <h3>
                                ${item[1]}
                            </h3>

                            <p>
                                ${item[2]}
                            </p>

                        </article>
                    `;

                })
                .join("");

    }


    // ==================================================
    // COMPANY VALUES
    // ==================================================

    const valuesElement = el("values");

    if (valuesElement) {

        const values = [
            ["✓", "Quality"],
            ["↗", "Reliability"],
            ["◇", "Transparency"],
            ["◎", "Integrity"],
            ["♡", "Customer Satisfaction"],
            ["∞", "Long-Term Partnerships"]
        ];

        valuesElement.innerHTML =
            values
                .map((item) => {

                    return `
                        <article class="feature-card">

                            <span class="feature-icon">
                                ${item[0]}
                            </span>

                            <h3>
                                ${item[1]}
                            </h3>

                        </article>
                    `;

                })
                .join("");

    }


    // ==================================================
    // PROCESS
    // ==================================================

    const processHTML =
        process
            .map((item, index) => {

                return `
                    <div class="process-step">

                        <span>
                            ${String(index + 1).padStart(2, "0")}
                        </span>

                        <b>
                            ${item}
                        </b>

                    </div>
                `;

            })
            .join("");


    ["process", "quality-process"]
        .forEach((id) => {

            const element = el(id);

            if (element) {
                element.innerHTML = processHTML;
            }

        });


    // ==================================================
    // FULL EXPORT PROCESS
    // ==================================================

    const processDescriptions = [

        "Buyer sends product, quantity, packaging and destination requirements.",

        "We review product and commercial specifications.",

        "Price and commercial terms are prepared.",

        "Quantity, packaging, destination and terms are finalized.",

        "Products are sourced through selected suppliers.",

        "Products are inspected according to agreed requirements.",

        "Products are sorted and graded.",

        "Products are packed according to buyer requirements.",

        "Required export documentation is prepared.",

        "Cargo is dispatched through the selected logistics channel.",

        "Shipment reaches the agreed destination."

    ];


    const fullProcess = el("full-process");

    if (fullProcess) {

        fullProcess.innerHTML =
            process
                .map((item, index) => {

                    return `
                        <div class="vertical-step">

                            <span>
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                            <div>

                                <h3>
                                    ${item}
                                </h3>

                                <p>
                                    ${processDescriptions[index] || ""}
                                </p>

                            </div>

                        </div>
                    `;

                })
                .join("");

    }


    // ==================================================
    // EXPORT MARKETS
    // ==================================================

    const marketFlags = [
        "🇸🇦",
        "🇦🇪",
        "🇶🇦",
        "🇴🇲",
        "🇰🇼",
        "🇧🇭"
    ];


    const marketHTML =
        markets
            .map((market, index) => {

                return `
                    <article class="market-card">

                        <span class="flag">
                            ${marketFlags[index] || "🌍"}
                        </span>

                        <h3>
                            ${market}
                        </h3>

                        <p>
                            International B2B market
                        </p>

                    </article>
                `;

            })
            .join("");


    ["markets", "markets-page"]
        .forEach((id) => {

            const element = el(id);

            if (element) {
                element.innerHTML = marketHTML;
            }

        });


    // ==================================================
    // PACKAGING
    // ==================================================

    const packagingGrid = el("packaging-grid");

    if (packagingGrid) {

        packagingGrid.innerHTML =
            packaging
                .map((item) => {

                    return `
                        <article class="pack-card">

                            <div class="pack-icon">
                                ▦
                            </div>

                            <h3>
                                ${item[0]}
                            </h3>

                            <small>
                                ${item[1]}
                            </small>

                            <p>
                                ${item[2]}
                            </p>

                        </article>
                    `;

                })
                .join("");

    }


    // ==================================================
    // FAQ
    // ==================================================

    const faqElement = el("faq");

    if (faqElement) {

        faqElement.innerHTML =
            faqs
                .map((item, index) => {

                    return `
                        <details ${index === 0 ? "open" : ""}>

                            <summary>

                                ${item[0]}

                                <span>
                                    +
                                </span>

                            </summary>

                            <p>
                                ${item[1]}
                            </p>

                        </details>
                    `;

                })
                .join("");

    }


    // ==================================================
    // REQUEST QUOTE PRODUCT LIST
    // ==================================================

    const quoteProduct = el("quote-product");

    if (quoteProduct) {

        // Remove previously generated product options
        quoteProduct
            .querySelectorAll("[data-product-option]")
            .forEach((option) => {
                option.remove();
            });


        // Add products from data.js
        products.forEach((product) => {

            const option =
                document.createElement("option");

            option.value =
                product.slug;

            option.textContent =
                product.name;

            option.setAttribute(
                "data-product-option",
                "true"
            );

            quoteProduct.appendChild(option);

        });

    }


    // ==================================================
    // PRESELECT PRODUCT FROM URL
    // ==================================================

    const params =
        new URLSearchParams(
            window.location.search
        );

    const productFromURL =
        params.get("product");


    if (
        quoteProduct &&
        productFromURL
    ) {

        const matchingProduct =
            products.find(
                (product) =>
                    product.slug === productFromURL
            );


        if (matchingProduct) {

            quoteProduct.value =
                matchingProduct.slug;

        }

    }


    // ==================================================
    // MOBILE MENU
    // ==================================================

    document
        .querySelectorAll(".menu-btn")
        .forEach((button) => {

            button.addEventListener("click", () => {

                const nav =
                    document.querySelector(".nav nav");


                if (nav) {

                    nav.classList.toggle("open");

                }

            });

        });


    // ==================================================
    // WEB3FORMS SUBMISSION
    // ==================================================

    const submitToWeb3Forms = async (
        form,
        successElement,
        successText
    ) => {

        const submitButton =
            form.querySelector(
                "button[type='submit']"
            );


        if (successElement) {

            successElement.hidden =
                true;

        }


        if (submitButton) {

            submitButton.disabled =
                true;

            submitButton.dataset.originalText =
                submitButton.textContent;

            submitButton.textContent =
                "Sending...";

        }


        try {

            const formData =
                new FormData(form);


            const response =
                await fetch(
                    "https://api.web3forms.com/submit",
                    {
                        method: "POST",
                        body: formData
                    }
                );


            const result =
                await response.json();


            if (
                response.ok &&
                result.success
            ) {

                if (successElement) {

                    successElement.hidden =
                        false;

                    successElement.textContent =
                        successText;

                }


                form.reset();


                // Restore URL-selected product
                if (
                    form.id === "rfq-form" &&
                    quoteProduct &&
                    productFromURL
                ) {

                    const matchingProduct =
                        products.find(
                            (product) =>
                                product.slug === productFromURL
                        );


                    if (matchingProduct) {

                        quoteProduct.value =
                            matchingProduct.slug;

                    }

                }


                if (successElement) {

                    setTimeout(() => {

                        successElement.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }, 100);

                }


                return true;

            }


            if (successElement) {

                successElement.hidden =
                    false;

                successElement.textContent =
                    "Sorry, your inquiry could not be sent. Please try again.";

            }


            return false;


        } catch (error) {

            console.error(
                "Web3Forms submission error:",
                error
            );


            if (successElement) {

                successElement.hidden =
                    false;

                successElement.textContent =
                    "Something went wrong while sending your inquiry. Please try again.";

            }


            return false;


        } finally {

            if (submitButton) {

                submitButton.disabled =
                    false;

                submitButton.textContent =
                    submitButton.dataset.originalText ||
                    "Submit";

            }

        }

    };


    // ==================================================
    // CONTACT FORM
    // ==================================================

    const contactForm =
        el("contact-form");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            async (event) => {

                event.preventDefault();


                const successMessage =
                    el("contact-success");


                await submitToWeb3Forms(
                    contactForm,
                    successMessage,
                    "Thanks. Your inquiry has been received. Our export team will contact you shortly."
                );

            }
        );

    }


    // ==================================================
    // REQUEST QUOTE FORM
    // ==================================================

    const quoteForm =
        el("rfq-form");


    if (quoteForm) {

        quoteForm.addEventListener(
            "submit",
            async (event) => {

                event.preventDefault();


                const successMessage =
                    el("form-success");


                await submitToWeb3Forms(
                    quoteForm,
                    successMessage,
                    "Thank you. Your quote request has been received. Our export team will review your requirements and contact you shortly."
                );

            }
        );

    }

});

