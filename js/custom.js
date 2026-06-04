// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Wrapped code in this event listener
document.addEventListener('DOMContentLoaded', () => {

    // 1. Fixed getYear function
    function getYear() {
        const yearElement = document.querySelector("#displayYear");
        if (yearElement) { // Only set innerHTML if the element actually exists
            const currentYear = new Date().getFullYear();
            yearElement.innerHTML = currentYear;
        }
    }
    getYear();

    // 2. Client section owl carousel
    // Ensure jQuery is loaded before this runs
    if (typeof $ !== 'undefined') {
        $(".client_owl-carousel").owlCarousel({
            loop: true,
            margin: 20,
            dots: false,
            nav: true,
            autoplay: true,
            autoplayHoverPause: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            responsive: {
                0: { items: 1 },
                768: { items: 2 }
            }
        });
    }
});

/** 3. Google Maps **/
// Note: This must be called by the Google Maps API callback 
// as defined in your <script> tag
function myMap() {
    const mapElement = document.getElementById("googleMap");
    if (mapElement) {
        var mapProp = {
            center: new google.maps.LatLng(40.712775, -74.005973),
            zoom: 18,
        };
        var map = new google.maps.Map(mapElement, mapProp);
    }
}