/**
 * Experiment-6: E-Commerce / Cloud Service Website Design
 * Author: Amey Thakur & Mega Satish
 * Batch: B3
 * Roll No: 50
 * Subject: Human Machine Interaction (CSL801)
 * Date: 13/03/2022
 * 
 * =========================================
 *   CONSOLE EASTER EGG ☁️
 * =========================================
 */
console.log(
    "%c☁️ Cloud Services - Visionary Infrastructure (v2.0)",
    "font-size: 24px; font-weight: bold; color: #007bfc; text-shadow: 2px 2px 0 #0d1e67;"
);
console.log(
    "%c🚀 Pristine, Intuitive, and Elegant Cloud Solutions",
    "font-size: 14px; color: #666;"
);
console.log(
    "%c👨🏻‍💻 Developed by Amey Thakur & Mega Satish",
    "font-size: 12px; color: #22c55e;"
);
console.log(
    "%c⚠️ Security enabled. This project is a refined HMI masterpiece.",
    "font-size: 12px; color: #f59e0b; font-weight: bold;"
);

// =========================================
//   SECURITY MEASURES 🔒
// =========================================
(function initSecurity() {
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('dragstart', e => e.preventDefault());
    document.addEventListener('selectstart', e => {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') e.preventDefault();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) || (e.ctrlKey && e.key === 'u')) e.preventDefault();
    });
})();

/**
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
        pagination: true,
        navigation: true,
        navigationText: ["", ""],
        autoPlay: true
    });

    $("#blog-slider").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 1],
        pagination: true,
        navigation: true,
        navigationText: ["", ""],
        autoPlay: true
    });
});

// =========================================
//   SMART LOADING SCREEN LOGIC ☁️
// =========================================
window.addEventListener('load', () => {
    handleLoadingScreen();
});

// Logo Click Handler - Force Loader on Next Visit
$(document).ready(function () {
    $('.logo a').click(function () {
        sessionStorage.setItem('forceLoad', 'true');
    });
});

function handleLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingBar = document.getElementById('loading-bar');

    // Check if first visit or forced reload
    const isFirstVisit = !sessionStorage.getItem('hasVisited');
    const isForced = sessionStorage.getItem('forceLoad');

    if (isFirstVisit || isForced) {
        // Run Full Animation
        startLoadingAnimation(loadingScreen, loadingBar);

        // Update State
        sessionStorage.setItem('hasVisited', 'true');
        if (isForced) sessionStorage.removeItem('forceLoad');
    } else {
        // Brief Animation (Natural Page Transition)
        startBriefLoadingAnimation(loadingScreen, loadingBar);
    }
}

function startLoadingAnimation(screen, bar) {
    if (window.loadingStarted) return;
    window.loadingStarted = true;

    screen.classList.remove('hidden'); // Ensure visible
    let progress = 0;

    // Sync with Pulse: 2000ms duration
    // Interval 100ms * 20 steps = 2000ms
    const interval = setInterval(() => {
        progress += 5; // Linear, predictable progress for sync
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                screen.classList.add('hidden');
                // Reset flag for brief loads on same page if needed, 
                // but usually brief load is new page load.
            }, 300); // Quick fade out after completion 
        }
        if (bar) bar.style.width = progress + '%';
    }, 100);
}

function startBriefLoadingAnimation(screen, bar) {
    if (window.loadingStarted) return;
    window.loadingStarted = true;

    screen.classList.remove('hidden');
    let progress = 0;

    // Much faster, smoother transition for nav
    const interval = setInterval(() => {
        progress += Math.random() * 20 + 15; // Aggressive progress
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                screen.classList.add('hidden');
            }, 200); // Short pause
        }
        if (bar) bar.style.width = progress + '%';
    }, 50); // Fast interval
}
