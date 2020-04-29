'use strict';

const path = 'http://localhost:5500';

document.addEventListener('DOMContentLoaded', function () {
    particlesJS.load('particles-js', path + '/src/js/particlesjs-config.json', function () {
        return consoleHello();
    });
    // setTimeout(() => {
    //     msg();
    // }, 3000);
});

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

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

function msg() {
    console.log("Escribe 'cv()' para ver mi CV");
}
function cv() {
    window.location.replace(path + "/cv.html");
    // window.location.href = path + "/src/pdf/CV-Carlos-Alvarez-Linares.pdf";
}