/*============================================
                    
                    WOW

==============================================*/

$(function () {
    new WOW().init();

})

/*============================================
                    
                    Work

==============================================*/

$(function () {

    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',

        gallery: {
            enabled: true
        },

        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function (openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    })

})

/*============================================
                    
                    Team Memebers

==============================================*/

$(document).ready(function () {
    $(".team-members").owlCarousel({
        items: 3,
        margin: 30,
        autoplay: true,
        loop: true,
        smartSpeed: 900,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 3
            }

        }
    });

    /*============================================
                        
                        Testimonials

    ==============================================*/

    $(".customers-testimonials").owlCarousel({
        items: 1,
        margin: 30,
        autoplay: true,
        loop: true,
        smartSpeed: 900,
        autoplayHoverPause: true

    });


});

/*============================================
                    
                    stats

==============================================*/

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    })
});

/*============================================
                    
                    Clients

==============================================*/

$(function () {
    $(".clients-pics").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 5
            },

            992: { 
                items: 6
            }
        }

    })
});


/*============================================
                    
                    Navigation

==============================================*/

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            //hide
            $("nav").removeClass("vesco-top-nav");
        } else {
            //show
            $("nav").addClass("vesco-top-nav");
        }
    })
});

// smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 1250, 'easeInOutExpo');
    });
});

//close mobile menu on click

$(function () {
    $(".nav-link").on("click touch", function () {
        $(".navbar-toggler").click();

    })
})

/*============================================
                    
                    Back To Top

==============================================*/

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            $("#back-to-top").fadeOut();
        } else {
            $("#back-to-top").fadeIn();
        }
    })
})