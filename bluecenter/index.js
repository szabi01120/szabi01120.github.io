//mobile dropdown menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#navbar-links');
const tovabbiak = document.querySelector('#navbar-tovabbiak');
const drop = document.querySelector('#navbar-drop');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
})

tovabbiak.addEventListener('click', () => {
    drop.classList.toggle('is-hidden-mobile');
})

//aos animations
AOS.init({
    once: false,
    loop: true
});

//sticky navbar
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

const delButton = document.querySelector('#del-but');
const notification = document.querySelector('#notif-closed');

delButton.addEventListener('click', () => {
    notification.classList.toggle('is-hidden');
})

