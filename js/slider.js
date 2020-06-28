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
    responsive: [
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
      }
    ]
  });
  
// slider.slick({
//     autoplay: true,
//     autoplaySpeed: 3000,
//     speed: 300,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: arrowPrev,
//     nextArrow: arrowNext,
//     });

    // Изменение типа слайдера 

    // let windowScrennCheck = window.matchMedia('(max-width: 992px');

    // function screenTest(e) {
    //     if (e.matches) {
            
    //     }
    // }

    // screenTest(windowScrennCheck);

    // windowScrennCheck.addListener(screenTest);
    
