$(document).on('click', '.dropdown-menu', function (e) {
    e.stopPropagation();
});

// make it as accordion for smaller screens
if ($(window).width() < 992) {
    $('.dropdown-menu a').click(function(e){
        e.preventDefault();
        if($(this).next('.submenu').length){
            $(this).next('.submenu').toggle();
        }
        $('.dropdown').on('hide.bs.dropdown', function () {
            $(this).find('.submenu').hide();
        })
    });
}

// основной слайдер
$(document).ready(function () {
    $('.slider-img').slick({
        dots: true,
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows:0,
        arrows:false,
    });
});

$('.new_slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows:0,
    arrows:true,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 785,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                rows:0,
            }
        },
    ]
});

$('.sale_slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows:0,
    arrows:true,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 785,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                rows:0,
            }
        },
    ]
});

$('.news_slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows:0,
    arrows:false,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 785,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                rows:0,
            }
        },
    ]
});
$(document).ready(function () {
    $('.slider_vacansie__box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider_vacansie__nav'
    });
    $('.slider_vacansie__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider_vacansie__box',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        arrows: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false
            }
        }]
    });
});