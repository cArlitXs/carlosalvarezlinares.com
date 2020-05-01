'use strict';

// const path = 'http://localhost:5500';
const path = 'https://carlosalvarezlinares.com';

// ON LOAD
document.addEventListener('DOMContentLoaded', function () {
    particlesJS.load('particles-js', path + '/src/js/particlesjs-config.json', () => consoleHello());
});

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
    event.target.href = "../pdf/CV-Carlos-Alvarez-Linares.pdf"
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