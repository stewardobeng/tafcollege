const fs = require('fs');
const path = require('path');

const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>TAF College - {{TITLE}}</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    <link href="img/favicon.ico" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;700&family=Work+Sans:wght@400;600&display=swap" rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/animate/animate.min.css" rel="stylesheet">
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet">
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
    <!-- Spinner -->
    <div id="spinner" class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>

    <!-- Header Start -->
     <div class="container-fluid p-0">
        <div id="site-header"></div>

        <div class="page-header pb-5">
            <div class="container text-center py-5">
                <h1 class="display-4 text-uppercase mb-3 animated slideInDown">{{TITLE}}</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol class="breadcrumb justify-content-center text-uppercase mb-0">
                        <li class="breadcrumb-item"><a class="text-white" href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a class="text-white" href="service.html">Programs</a></li>
                        <li class="breadcrumb-item text-primary active" aria-current="page">{{TITLE}}</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <!-- Header End -->

    <!-- Course Detail Start -->
    <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="img-border">
                        <img class="img-fluid" src="{{IMAGE}}" alt="{{TITLE}}">
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="h-100">
                        <h6 class="section-title bg-white text-start text-primary pe-3">Course Detail</h6>
                        <h1 class="display-6 mb-4">{{TITLE}}</h1>
                        <p>{{DESCRIPTION}}</p>
                        <p class="mb-4">Our curriculum is designed to give you practical, hands-on experience using industry-standard tools and techniques. Join us to transform your passion into a profession.</p>
                        
                        <div class="d-flex align-items-center mb-4 pb-2">
                            <i class="fa fa-check fa-2x text-primary me-3"></i>
                            <div>
                                <h6 class="mb-1">Expert Instructors</h6>
                                <small>Learn from industry veterans.</small>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-4 pb-2">
                            <i class="fa fa-check fa-2x text-primary me-3"></i>
                            <div>
                                <h6 class="mb-1">Practical Projects</h6>
                                <small>Build a professional portfolio.</small>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-4 pb-2">
                            <i class="fa fa-check fa-2x text-primary me-3"></i>
                            <div>
                                <h6 class="mb-1">Career Support</h6>
                                <small>Internships and job placement assistance.</small>
                            </div>
                        </div>
                        <a class="btn btn-primary py-3 px-5 mt-3" href="application.html">Apply Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Course Detail End -->

    <!-- Footer Start -->
    <div id="site-footer"></div>
    <!-- Footer End -->

    <!-- Back to Top -->
    <a href="#" class="btn btn-outline-primary border-2 btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>

    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>
    <script src="js/partials.js"></script>
    <script src="js/main.js"></script>
</body>
</html>`;

const courses = [
    {
        filename: 'course-fashion-design.html',
        title: 'Fashion Design',
        image: 'img/fd.jpg',
        description: 'Immerse yourself in the world of fashion. Our program covers everything from illustration and pattern making to garment construction and fashion marketing. Learn to bring your creative visions to life and launch your own label or career in the industry.'
    },
    {
        filename: 'course-cosmetology.html',
        title: 'Cosmetology',
        image: 'img/3.jpg',
        description: 'Master the art and science of beauty. Our comprehensive cosmetology course includes hair styling, makeup artistry, skincare, and nail technology. Gain the skills and business knowledge to thrive in salons, spas, or as a freelance beauty professional.'
    },
    {
        filename: 'course-content-creation.html',
        title: 'Content Creation & AI',
        image: 'img/4.jpg',
        description: 'Stay ahead in the digital age. Learn to create compelling video and visual content for social media and web platforms. This course also integrates the latest AI tools to enhance creativity and streamline production workflows.'
    },
    {
        filename: 'course-music-production.html',
        title: 'Music Production',
        image: 'img/mp-1.jpg',
        description: 'Turn your sonic ideas into professional tracks. Our music production program offers hands-on training in state-of-the-art studios. Learn recording techniques, mixing, mastering, and the business of music from experienced producers.'
    },
    {
        filename: 'course-design-build-manage.html',
        title: 'Design, Build & Manage',
        image: 'img/carousel-2.jpg',
        description: 'Gain essential skills for the built environment. This course covers the fundamentals of architectural design, construction management, and facility maintenance. Prepare for a career in planning, building, and managing sustainable infrastructure.'
    }
];

courses.forEach(course => {
    let content = template.replace(/{{TITLE}}/g, course.title)
                          .replace(/{{IMAGE}}/g, course.image)
                          .replace(/{{DESCRIPTION}}/g, course.description);
    fs.writeFileSync(path.join(__dirname, course.filename), content);
    console.log(`Created ${course.filename}`);
});
