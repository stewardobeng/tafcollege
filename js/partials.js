(function () {
    "use strict";

    var headerFallback = '<nav class="navbar navbar-expand-lg navbar-dark px-lg-5 nav-compact">' +
        '<a href="index.html" class="navbar-brand ms-4 ms-lg-0">' +
        '<img src="img/tafcollege-logo.png" alt="TAF College" style="height: 100px;">' +
        '</a>' +
        '<button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">' +
        '<span class="navbar-toggler-icon"></span>' +
        '</button>' +
        '<div class="collapse navbar-collapse" id="navbarCollapse">' +
        '<div class="navbar-nav mx-auto p-4 p-lg-0">' +
        '<a href="index.html" class="nav-item nav-link">Home</a>' +
        '<a href="about.html" class="nav-item nav-link">About</a>' +
        '<a href="service.html" class="nav-item nav-link">Programs</a>' +
        '<div class="nav-item dropdown" data-menu="admissions">' +
        '<a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Admissions</a>' +
        '<div class="dropdown-menu m-0">' +
        '<a href="application.html" class="dropdown-item">Application Form</a>' +
        '<a href="admissions.html" class="dropdown-item">Admissions</a>' +
        '<a href="scholarships.html" class="dropdown-item">Scholarships</a>' +
        '<a href="faq.html" class="dropdown-item">FAQs</a>' +
        '</div>' +
        '</div>' +
        '<a href="team.html" class="nav-item nav-link">Staff</a>' +
        '<a href="contact.html" class="nav-item nav-link">Contact</a>' +
        '</div>' +
        '<div class="d-none d-lg-flex">' +
        '<a class="btn btn-outline-primary border-2" href="#" data-bs-toggle="modal" data-bs-target="#donationModal">Donate</a>' +
        '</div>' +
        '</div>' +
        '</nav>';

    var donationModalFallback = '<!-- Donation Modal -->' +
        '<div class="modal fade" id="donationModal" tabindex="-1" aria-labelledby="donationModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog modal-dialog-centered modal-lg">' +
        '<div class="modal-content bg-dark text-white">' +
        '<div class="modal-header border-secondary">' +
        '<h5 class="modal-title text-primary" id="donationModalLabel">Support TAF College</h5>' +
        '<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>' +
        '</div>' +
        '<div class="modal-body">' +
        '<p class="mb-4">Thank you for your interest in supporting TAF College. Your contribution helps us provide quality education and empower the next generation of creatives.</p>' +
        '<div class="row g-4">' +
        '<div class="col-md-6">' +
        '<div class="p-4 border border-secondary rounded h-100">' +
        '<div class="text-center mb-3">' +
        '<i class="fa fa-university fa-3x text-primary"></i>' +
        '</div>' +
        '<h5 class="text-center text-primary mb-3">Bank Transfer</h5>' +
        '<ul class="list-unstyled">' +
        '<li class="mb-2"><strong>Bank Name:</strong> [Your Bank Name]</li>' +
        '<li class="mb-2"><strong>Account Name:</strong> TAF College</li>' +
        '<li class="mb-2"><strong>Account Number:</strong> [Your Account Number]</li>' +
        '<li class="mb-2"><strong>Branch:</strong> [Branch Name]</li>' +
        '<li><strong>Swift Code:</strong> [Swift Code]</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class="col-md-6">' +
        '<div class="p-4 border border-secondary rounded h-100">' +
        '<div class="text-center mb-3">' +
        '<i class="fa fa-mobile-alt fa-3x text-primary"></i>' +
        '</div>' +
        '<h5 class="text-center text-primary mb-3">Mobile Money</h5>' +
        '<ul class="list-unstyled">' +
        '<li class="mb-2"><strong>Network:</strong> MTN Mobile Money</li>' +
        '<li class="mb-2"><strong>Merchant Name:</strong> TAF College</li>' +
        '<li class="mb-2"><strong>Merchant ID:</strong> [Merchant ID]</li>' +
        '<li class="mb-2"><strong>Number:</strong> [Your MoMo Number]</li>' +
        '<li><strong>Reference:</strong> Donation</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="modal-footer border-secondary">' +
        '<button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">Close</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';


    var footerFallback = '<div class="container-fluid bg-dark text-light footer py-5 wow fadeIn" data-wow-delay="0.1s">' +
        '<div class="container text-center py-5">' +
        '<a href="index.html" class="d-inline-block mb-4">' +
        '<img src="img/tafcollege-logo.png" alt="TAF College" style="height: 100px;">' +
        '</a>' +
        '<div class="d-flex justify-content-center mb-4">' +
        '<a class="btn btn-lg-square btn-outline-primary border-2 m-1" href="#"><i class="fab fa-x-twitter"></i></a>' +
        '<a class="btn btn-lg-square btn-outline-primary border-2 m-1" href="#"><i class="fab fa-facebook-f"></i></a>' +
        '<a class="btn btn-lg-square btn-outline-primary border-2 m-1" href="#"><i class="fab fa-instagram"></i></a>' +
        '<a class="btn btn-lg-square btn-outline-primary border-2 m-1" href="#"><i class="fab fa-tiktok"></i></a>' +
        '<a class="btn btn-lg-square btn-outline-primary border-2 m-1" href="#"><i class="fab fa-youtube"></i></a>' +
        '<a class="btn btn-lg-square btn-outline-primary border-2 m-1" href="#"><i class="fab fa-linkedin-in"></i></a>' +
        '</div>' +
        '<div class="d-flex flex-wrap justify-content-center gap-3 mb-4">' +
        '<a class="text-light" href="about.html">About</a>' +
        '<a class="text-light" href="service.html">Programs</a>' +
        '<a class="text-light" href="admissions.html">Admissions</a>' +
        '<a class="text-light" href="scholarships.html">Scholarships</a>' +
        '<a class="text-light" href="application.html">Apply</a>' +
        '<a class="text-light" href="contact.html">Contact</a>' +
        '</div>' +
        '<p class="mb-2"><i class="fa fa-map-marker-alt me-2"></i>1 Blohum Road, Dzorwulu, Accra-Ghana</p>' +
        '<p class="mb-2"><i class="fa fa-phone-alt me-2"></i>+233 57 006 6000</p>' +
        '<p class="mb-4"><i class="fa fa-envelope me-2"></i><a href="mailto:info@tafcollege.edu.gh" class="text-light">info@tafcollege.edu.gh</a></p>' +
        '<p>&copy; <a class="border-bottom" href="#">TAF College</a>, All Right Reserved.</p>' +
        '<p class="mb-0">Developed by <a class="border-bottom" href="https://steprotech.com">SteProTECH</a></p>' +
        '</div>' +
        '</div>';

    function loadPartial(target, url, fallback) {
        if (!target) {
            return Promise.resolve();
        }

        if (window.location.protocol === "file:" && fallback) {
            target.innerHTML = fallback;
            return Promise.resolve();
        }

        return fetch(url, { cache: "no-store" }).then(function (response) {
            if (!response.ok) {
                throw new Error("Failed to load " + url + ": " + response.status);
            }
            return response.text();
        }).then(function (html) {
            target.innerHTML = html;
        }).catch(function (error) {
            if (fallback) {
                target.innerHTML = fallback;
                return;
            }
            throw error;
        });
    }

    function setActiveNav() {
        var nav = document.querySelector(".navbar");
        if (!nav) {
            return;
        }

        var path = window.location.pathname || "";
        var page = path.split("/").pop() || "index.html";
        page = page.split("?")[0].split("#")[0];

        var linkSelector = null;
        var isPrograms = page === "service.html" || page.indexOf("course-") === 0;
        var admissionsPages = ["application.html", "admissions.html", "scholarships.html", "faq.html"];

        if (page === "index.html") {
            linkSelector = 'a.nav-link[href="index.html"]';
        } else if (page === "about.html") {
            linkSelector = 'a.nav-link[href="about.html"]';
        } else if (isPrograms) {
            linkSelector = 'a.nav-link[href="service.html"]';
        } else if (page === "team.html") {
            linkSelector = 'a.nav-link[href="team.html"]';
        } else if (page === "contact.html") {
            linkSelector = 'a.nav-link[href="contact.html"]';
        }

        if (linkSelector) {
            var link = nav.querySelector(linkSelector);
            if (link) {
                link.classList.add("active");
            }
        }

        function setDropdownActive(menuName) {
            var toggle = nav.querySelector('[data-menu="' + menuName + '"] .nav-link');
            if (toggle) {
                toggle.classList.add("active");
            }
            var item = nav.querySelector('[data-menu="' + menuName + '"] .dropdown-item[href="' + page + '"]');
            if (item) {
                item.classList.add("active");
            }
        }

        if (admissionsPages.indexOf(page) !== -1) {
            setDropdownActive("admissions");
        }
    }

    var headerTarget = document.getElementById("site-header");
    var footerTarget = document.getElementById("site-footer");
    var modalTarget = document.getElementById("donation-modal-root");

    var headerPromise = loadPartial(headerTarget, "partials/header.html", headerFallback);
    var modalPromise = loadPartial(modalTarget, "partials/donation_modal.html", donationModalFallback);
    var footerPromise = loadPartial(footerTarget, "partials/footer.html", footerFallback);

    window.partialsReady = Promise.all([headerPromise, modalPromise, footerPromise]).then(function () {
        setActiveNav();
    }).catch(function (error) {
        console.error("Failed to load shared partials:", error);
    });
})();
