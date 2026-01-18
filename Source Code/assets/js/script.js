/**
 * Experiment-6: E-Commerce / Cloud Service Website Design
 * Author: Amey Thakur
 * Batch: B3
 * Roll No: 50
 * Subject: Human Machine Interaction (CSL801)
 * Date: 13/03/2022
 *
 * This JavaScript file handles sticky navigation, mobile menu toggling,
 * portfolio filtering, and testimonial carousel initialization.
 */
$(document).ready(function () {
    var w = window.innerWidth;

    if (w > 767) {
        $('#menu-jk').scrollToFixed();
    } else {
        $('#menu-jk').scrollToFixed();
    }



})


$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.menu-toggle').toggleClass('active')
        $('.menu').toggleClass('active')
    });
});



$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});


$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 1],
        pagination: false,
        navigation: true,
        navigationText: ["", ""],
        autoPlay: true
    });
});
