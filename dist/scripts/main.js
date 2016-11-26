'use strict';

// ready
$(document).ready(function () {

    // mask phone
    //$("[name=phone]").mask("+7 (999) 999-9999");
    // mask phone

    // anchor
    $(".anchor").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top + 40 }, 1000);
    });
    // anchor

    // slider
    $('.singleItem').slick({
        arrows: true,
        dots: false
    });
    //$('.carouseltem').slick({
    //    centerMode: false,
    //    infinite: true,
    //    centerPadding: '20px',
    //    slidesToShow: 5,
    //    dots: false,
    //    arrows: false,
    //    responsive: [
    //        {
    //            breakpoint: 768,
    //            settings: {
    //                arrows: false,
    //                centerMode: true,
    //                centerPadding: '10px',
    //                slidesToShow: 3
    //            }
    //        },
    //        {
    //            breakpoint: 480,
    //            settings: {
    //                arrows: false,
    //                centerMode: true,
    //                centerPadding: '10px',
    //                slidesToShow: 1
    //            }
    //        }
    //    ]
    //});
    // slider

    // select
    $('select').select2({
        minimumResultsForSearch: Infinity
    });
    // select

    // fancybox
    $('.imageLink').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    // fancybox
});
// ready

// load
$(document).load(function () {});
// load

// scroll
$(window).scroll(function () {});
// scroll

// mobile sctipts
var screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if (screen_width <= 767) {}
// mobile sctipts
//# sourceMappingURL=main.js.map