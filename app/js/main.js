
$(function () {
  $('.slider-products').slick({
    prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
    infinite: false,
    appendArrows: '.arrows-wrap'
    
  });

  $('.products-slider').slick({
    prevArrow: '<button type="button" class="slick-arrow slick-arrow--m slick-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-arrow--m slick-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
    infinite: false,
    appendArrows: '.arrows-wrapper'
  });

  

  $(".rate-star").rateYo({
    rating: '4.5',
    readOnly: true,
    starWidth: "14px",
    normalFill: '#cccccc',
    ratedFill: '#ffc000',
    spacing: "3px",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'
  });

  let mySwiper = new Swiper('.feedback__swiper-container', {
    slideClass: 'feedback__items',
    wrapperClass: 'feedback__wrapper', 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  

  var mixer = mixitup('.products__wrapper');

});



