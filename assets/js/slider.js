$('.responsive').slick({
    
    autoplay: true,
    autoplaySpeed:0,
    loop:true,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    cssEase: 'linear',
    responsive: [
        
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 1000,
    slidesPerView: 3,
    autoplay: {
        delay:1000000 ,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide : 1,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 2,
        slideShadows: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: 
    {
      480: {
        slidesPerView: 1,
        spaceBetween: 0,
        
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    }

})