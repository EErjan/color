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

try {
    (function () {

        const link = document.querySelectorAll('ul > li ');
        const cursor =
            document.querySelector('.cursor');
        const animateit = function (e) {
            const span = this.querySelector('span');
            const {offsetX: x, offsetY: y} = e,
                {offsetWidth: width, offsetHeight: height} = this,

                move = 25,
                xMove = x / width * (move * 2) - move,
                yMove = y / height * (move * 2) - move;
            span.style.transform = `translate(${xMove}px, ${yMove}px)`;


            if (e.type === 'mouseleave') span.style.transform = '';
        };

        const editCursor = e => {
            const {clientX: x, clientY: y} = e;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
        };

        link.forEach(b => b.addEventListener('mousemove', animateit));
        link.forEach(b => b.addEventListener('mouseleave', animateit));
        window.addEventListener('mousemove', editCursor);

    })();
} catch (e) {
    console.log(e);
}



// Mobile menu end


// AOS

AOS.init();


