'use strict';

window.addEventListener('scroll', noScroll);

window.addEventListener('load', (event) => {
    loader();
    window.removeEventListener('scroll', noScroll);
});

function noScroll() {
    window.scrollTo(0, 0);
}

// ON LOAD
document.addEventListener('DOMContentLoaded', function () {
    particlesJS.load('particles-js', '/src/js/particlesjs-config.json', () => (consoleHello()));
});

// LOADER
function loader() {
    let loader = document.querySelector('#loader');
    let back = document.querySelector('#back');
    let body = document.body;

    loader.style.visibility = 'hidden';
    loader.style.transition = "all 0.5s";
    loader.style.opacity = '0';
    back.style.visibility = 'hidden';
    back.style.transition = "all 0.5s";
    back.style.opacity = '0';
}


// SHOW MODAL DAW
function showModalDaw(e) {
    document.querySelector('#modal-daw').classList.add('is-active');
}
// CLOSE MODAL DAW
function closeModalDaw() {
    document.querySelector('#modal-daw').classList.remove('is-active');
}

// DESCARGAR PDF
document.querySelector('.a-download').addEventListener('click', event =>
    event.target.href = "https://carlosalvarezlinares.com/src/pdf/CV-Carlos-Alvarez-Linares.pdf"
);

// MESSAGE IN CONSOLE
function consoleHello() {
    let userAgent = navigator.userAgent.toLowerCase();
    // let supported = /(chrome|firefox)/;
    let supported = /(chrome)/;
    if (supported.test(userAgent.toLowerCase())) {
        let m1 = ['padding: 18px 5px 16px', 'background-color: #000000', 'color: #ffffff'].join(';');
        let m2 = ['padding: 18px 5px 16px', 'background-color: #000000', 'color: #ffffff'].join(';');
        let space = ['background-color: transparent'].join(';');
        let msg = '%c Crafted with ❤ by Carlos Alvarez Linares %c https://carlosalvarezlinares.com/cv %c';
        console.log(msg, m1, m2, space);
    }
    // else if (window.console)
    else
        console.log('Crafted with love by Carlos Alvarez Linares - https://carlosalvarezlinares.com/cv');
}

// NAVBAR
document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
});
function closeNavbar(e) {
    document.querySelector('#navbarDropdown').classList.remove('is-active');
    document.querySelector('.navbar-burger').classList.remove('is-active');
}

// SCROLL REVEAL
ScrollReveal({ reset: true }).reveal('.scrollreveal');

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}