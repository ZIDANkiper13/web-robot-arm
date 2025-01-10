// Core script for dynamic interactions

// Add smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Toggle button interaction for navbar
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('#navbarSupportedContent');

navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});
