document.addEventListener("DOMContentLoaded", function () {


    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", function () {

        const scrollPos = window.scrollY;

        // Navbar Shadow
        if (navbar) {
            navbar.classList.toggle("scrolled", scrollPos > 50);
        }

        // Active Navigation Link
        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (
                scrollPos >= sectionTop &&
                scrollPos < sectionTop + sectionHeight
            ) {

                navLinks.forEach(function (link) {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + sectionId) {
                        link.classList.add("active");
                    }

                });

            }

        });

    });


    // =========================================
    // 2. MOBILE NAVBAR
    // =========================================

    const mobileLinks = document.querySelectorAll(".navbar .nav-link");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const navbarCollapse =
                document.querySelector(".navbar-collapse");

            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bsCollapse) {
                    bsCollapse.hide();
                }

            }

        });

    });


    // =========================================
    // 3. SMOOTH SCROLL
    // =========================================

    const smoothLinks =
        document.querySelectorAll('a[href^="#"]');

    smoothLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (targetId === "#" || !targetId) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                const navbarHeight =
                    navbar ? navbar.offsetHeight : 0;

                window.scrollTo({

                    top: target.offsetTop - navbarHeight,

                    behavior: "smooth"

                });

            }

        });

    });


    // =========================================
    // 4. SOS BUTTONS
    // =========================================

    const navSOS =
        document.getElementById("navSOS");

    const heroSOS =
        document.getElementById("heroSOS");

    function showSOSMessage() {

        const confirmed = confirm(
            "🚨 Emergency SOS\n\nAre you sure you need emergency assistance?"
        );

        if (confirmed) {

            alert(
                "Please contact the appropriate emergency service immediately."
            );

        }

    }

    if (navSOS) {
        navSOS.addEventListener("click", showSOSMessage);
    }

    if (heroSOS) {
        heroSOS.addEventListener("click", showSOSMessage);
    }


    // =========================================
    // 5. EMERGENCY CALL CONFIRMATION
    // =========================================

    const callButtons =
        document.querySelectorAll('a[href^="tel:"]');

    callButtons.forEach(function (button) {
        document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // 1. NAVBAR & SCROLL EFFECTS
    // =========================================

    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", function () {

        const scrollPos = window.scrollY;

        // Navbar Shadow
        if (navbar) {
            navbar.classList.toggle("scrolled", scrollPos > 50);
        }

        // Active Navigation Link
        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (
                scrollPos >= sectionTop &&
                scrollPos < sectionTop + sectionHeight
            ) {

                navLinks.forEach(function (link) {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + sectionId) {
                        link.classList.add("active");
                    }

                });

            }

        });

    });


    // =========================================
    // 2. MOBILE NAVBAR
    // =========================================

    const mobileLinks = document.querySelectorAll(".navbar .nav-link");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const navbarCollapse =
                document.querySelector(".navbar-collapse");

            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bsCollapse) {
                    bsCollapse.hide();
                }

            }

        });

    });


    // =========================================
    // 3. SMOOTH SCROLL
    // =========================================

    const smoothLinks =
        document.querySelectorAll('a[href^="#"]');

    smoothLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (targetId === "#" || !targetId) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                const navbarHeight =
                    navbar ? navbar.offsetHeight : 0;

                window.scrollTo({

                    top: target.offsetTop - navbarHeight,

                    behavior: "smooth"

                });

            }

        });

    });


    // =========================================
    // 4. SOS BUTTONS
    // =========================================

    const navSOS =
        document.getElementById("navSOS");

    const heroSOS =
        document.getElementById("heroSOS");

    function showSOSMessage() {

        const confirmed = confirm(
            "🚨 Emergency SOS\n\nAre you sure you need emergency assistance?"
        );

        if (confirmed) {

            alert(
                "Please contact the appropriate emergency service immediately."
            );

        }

    }

    if (navSOS) {
        navSOS.addEventListener("click", showSOSMessage);
    }

    if (heroSOS) {
        heroSOS.addEventListener("click", showSOSMessage);
    }


    // =========================================
    // 5. EMERGENCY CALL CONFIRMATION
    // =========================================

    const callButtons =
        document.querySelectorAll('a[href^="tel:"]');

    callButtons.forEach(function (button) {
        locationResult.innerHTML = 
                <i class="fa-solid fa-triangle-exclamation"></i>

                <span>
                    ${message}
                </span>
            ;

        }

    }


    // =========================================
    // 8. FIND LOCATION BUTTON
    // =========================================

    function setButtonLoading(isLoading) {

        if (!findLocationBtn) {
            return;
        }


        findLocationBtn.disabled =
            isLoading;


        if (isLoading) {

            findLocationBtn.innerHTML = 
                <i class="fa-solid fa-spinner fa-spin"></i>
                Detecting...
            ;

        }

        else {

            findLocationBtn.innerHTML = 
                <i class="fa-solid fa-location-dot"></i>
                Find Help Near Me
            ;

        }

    }


    if (findLocationBtn) {

        findLocationBtn.addEventListener(
            "click",
            getUserLocation
        );

    }


   