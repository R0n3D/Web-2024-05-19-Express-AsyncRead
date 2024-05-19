const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click',() => {

    siteNav.classList.toggle('site-nav--open');
    menuToggle.classList.toggle('open');

})

