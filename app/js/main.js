$(function () {
  $('.featured__slick').slick({
    prevArrow: $('.featured__prev'),
    nextArrow: $('.featured__next'),
    infinite: false
  });


  $(".rate-star").rateYo({
    rating: 4.5,
    readOnly: true,
    starWidth: "14px",
    ratedFill: "#ffc000",
    normalFill: "#ffffff",
    spacing: "3px"
  });

});