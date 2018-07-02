$(document).ready(function () {

    $('.slider').slick({
        path_bulet: "slick/svg/romb.svg#romb",
        viewBox_bulet: "0 0 36 36",
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});