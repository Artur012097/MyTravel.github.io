let slider = $('.slider');
let arrowPrev = $('#slider_prev')
let arrowNext = $('#slider_next')


slider.slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: arrowPrev,
    nextArrow: arrowNext,
    });
    
