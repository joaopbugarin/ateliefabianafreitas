//topbar animation
window.addEventListener('scroll', () => {
const header = document.querySelector('.header');
if (window.scrollY > 50) {
    header.classList.add('header-scrolled');
} else {
    header.classList.remove('header-scrolled');
}
});

// Smooth scroll for all links with hashtags
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        // Get header height for offset
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
});
});


// Initialize Swiper
const gallerySwiper = new Swiper('.gallery-swiper', {
slidesPerView: 1,
spaceBetween: 30,
loop: true,
centeredSlides: true,
autoplay: {
    delay: 3500, // Time between slides in milliseconds
    disableOnInteraction: false, // Continues autoplay after user interaction
},
breakpoints: {
    768: {
        slidesPerView: 2,
        spaceBetween: 40,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 60,
    }
}
});