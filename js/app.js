const aside = document.querySelector('aside');
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
const myLogo = document.querySelector('.logo');
window.addEventListener('scroll', () => {
    aside.classList.toggle('sticky', window.scrollY > 0);
    header.classList.toggle('sticky', window.scrollY > 0);
});

menuBtn.addEventListener('click', () => {
    aside.classList.toggle('active');
    menuBtn.classList.toggle('active'); 
    myLogo.classList.toggle('active'); 
});

function showLinks() {
    aside.classList.toggle('active');
    menuBtn.classList.toggle('active'); 
    myLogo.classList.toggle('active'); 
}