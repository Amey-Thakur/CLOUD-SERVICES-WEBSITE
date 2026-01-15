/**
 * Project: Cloud Services Website
 * File: script.js
 * Date: March 13, 2022
 * Description: JavaScript to handle responsive menu toggling, filtering, and testimonial slider initialization.
 * 
 * Created by: Amey Thakur (https://github.com/Amey-Thakur) & Mega Satish (https://github.com/msatmod)
 * Repository: https://github.com/Amey-Thakur/CLOUD-SERVICES-WEBSITE
 * License: MIT
 */

// =========================================
//   CONSOLE EASTER EGG ☁️
// =========================================
console.log(
    "%c☁️ Cloud Services Website",
    "font-size: 24px; font-weight: bold; color: #0ea5e9; text-shadow: 2px 2px 0 #0c4a6e;"
);
console.log(
    "%c🚀 Your gateway to cloud computing solutions!",
    "font-size: 14px; color: #64748b;"
);
console.log(
    "%c💻 Developed by Amey Thakur & Mega Satish",
    "font-size: 12px; color: #22c55e;"
);
console.log(
    "%c🔗 https://github.com/Amey-Thakur/CLOUD-SERVICES-WEBSITE",
    "font-size: 12px; color: #2563eb;"
);
console.log(
    "%c⚠️ This website is protected. Please respect the authors' work!",
    "font-size: 12px; color: #f59e0b; font-weight: bold;"
);

// =========================================
//   SECURITY MEASURES 🔒
// =========================================
(function initSecurity() {
    document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    document.addEventListener('dragstart', function (e) { e.preventDefault(); });
    document.addEventListener('selectstart', function (e) {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') e.preventDefault();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) || (e.ctrlKey && e.key === 'u')) e.preventDefault();
    });
})();
/**
 * Sticky Navigation Handler
 * Uses the 'scrollToFixed' jQuery plugin to make the header menu fixed
 * at the top of the viewport when the user scrolls past it.
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


/**
 * Testimonial Slider Initialization
 * Utilizes Owl Carousel jQuery plugin to create a responsive slider.
 * Configuration includes items per breakpoint and auto-play.
 */
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