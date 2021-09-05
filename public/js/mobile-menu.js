const menuBtn = document.querySelector('#mobile-nav > img');
const menu = document.querySelector('#mobile-menu');
let menuIsOpen = false;

menuBtn.addEventListener('click', function() {
    if (!menuIsOpen) {
        menuBtn.setAttribute('src', 'assets/mobile/icon-cross.svg');
        menuBtn.classList.remove('icon--hamburger');
        menuBtn.classList.add('icon--cross');
        menu.classList.remove('hide');
        menu.classList.add('show-block');
        menuIsOpen = true;
    } else {
        menuBtn.setAttribute('src', 'assets/mobile/icon-hamburger.svg');
        menuBtn.classList.remove('icon--cross');
        menuBtn.classList.add('icon--hamburger');
        menu.classList.remove('show-block');
        menu.classList.add('hide');
        menuIsOpen = false;
    }
});