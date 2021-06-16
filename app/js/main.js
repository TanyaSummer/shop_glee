$(function(){

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },

    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
  },

  });


  $('.top-slider__inner').slick({
    dots:true,
    arrows:false
  });
 
  $(".star").rateYo({
    
    starWidth: "10px",
    normallFill: "#d6d6d6",
    ratedFill: '#ffc35b',
    // readOnly: true
  });

  var mixer = mixitup('.products__items');
  var mixer = mixitup('.new-disign__items');  
});