//topbar animation
window.addEventListener('scroll', () => {
const header = document.querySelector('.header');
if (window.scrollY > 50) {
    header.classList.add('header-scrolled');
} else {
    header.classList.remove('header-scrolled');
}
});