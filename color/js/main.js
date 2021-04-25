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
