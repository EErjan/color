// Musk
try {
    $('.phone-musk').inputmask("+\\9\\98(99) 999-99-99");
} catch (e) {

}


// Mobile menu

(function () {
    $('.hamburger-menu').on('click', function() {
        $('.bar').toggleClass('animate');
        var mobileNav = $('.mobile-nav');
        mobileNav.toggleClass('hide show');
    })
})();


// Mobile menu hover effect

// Mobile menu end


// AOS

AOS.init();


// "use strict";
// (function () {
//     var cursorMain = document.querySelector('.cursor-main');
//     var cursor = document.querySelector('.cursor');
//     var cursorLazy = document.querySelector('.cursor-lazy');
//
//     var editCursor = function editCursor(event) {
//         cursorMain.style.left = event.clientX + 'px';
//         cursorMain.style.top = event.clientY + 'px';
//         cursor.style.left = event.clientX + 'px';
//         cursor.style.top = event.clientY + 'px';
//         cursorLazy.style.left = event.clientX + 'px';
//         cursorLazy.style.top = event.clientY + 'px';
//
//     };
//
//     window.addEventListener('mousemove', editCursor);
//
//
// })();

// $(document).ready(function(){
//     $("a").hover(function(){
//             $('.cursor').css("transform", "scale(3) translate(-15%, -15%)");
//         },
//         function(){
//             $('.cursor').css("transform", "scale(1) translate(-50%, -50%)");
//         });
// });

// Button


// Accordion
var acc = document.getElementsByClassName("accordion__heading");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
