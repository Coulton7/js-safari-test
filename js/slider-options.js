(function($) {

  var $window = $(window),
  flexslider = { vars:{} };

  function getGridSize() {
    return (window.innerWidth < 768) ? 2 :
           (window.innerWidth < 992) ? 3 :
           (window.innerWidth < 1200) ? 4 : 4;
  }

  var i = 0;
  var txtone = "The Planet is burning… There is a long-term illness, affecting the entire planet, that must be tackled urgently.";
  var txttwo ="Identification of the need to carefully manage water resources was the key to moving forward.";
  var txtthree = "Policies to deliver a comprehensive network of public EV chargepoints";
  var speed = 50;

  $(document).ready(function() {

    $('.flexslider').flexslider({
      controlNav: false,
      directionNav: false

    });

    $('.controlNav').flexslider({
      controlNav: true,
      directionNav: false
    });

    $('.carousel-slider').flexslider({
      controlNav: false,
      directionNav: true,
      animation: "slide",
      easing: "swing",
      animationLoop: true,
      pauseOnHover: true,
      itemWidth: 180,
      itemMargin: 15,
      minItems: getGridSize(),
      maxItems: getGridSize(),
      move: 1,
      start: function(slider){
        flexslider = slider;
      }
    });

    $('.newsslider').flexslider({
      controlNav: false,
      directionNav: false,
      start: function(slider){
          if (document.getElementById('headline-1')){
            if (i < txtone.length) {
            document.getElementById('wrap').innerHTML += txtone.charAt(i);
            i++;
          }} else if (document.getElementById('headline-2')){
            if (i < txttwo.length) {
            document.getElementById('wrap').innerHTML += txttwo.charAt(i);
            i++;
          }
          } else if (document.getElementById('headline-3')){
            if (i < txtthree.length) {
              document.getElementById('wrap').innerHTML += txtthree.charAt(i);
              i++;
            }
          }
      },
      after: function(slider){
          if (document.getElementById('headline-1')){
            if (i < txtone.length) {
            document.getElementById('wrap').innerHTML += txtone.charAt(i);
            i++;
          }
          } else if (document.getElementById('headline-2')){
            if (i < txttwo.length) {
            document.getElementById('wrap').innerHTML += txttwo.charAt(i);
            i++;
          }
          } else if (document.getElementById('headline-3')){
            if (i < txtthree.length) {
              document.getElementById('wrap').innerHTML += txtthree.charAt(i);
              i++;
            }
          }
      },
      animation: "fade",
      slideshowSpeed: 12000,
      easing: "swing",
      animationLoop: true,

    });

    $('.product-slider').flexslider({
      controlNav: false,
      directionNav: false,
      animation: "fade",
      easing: "swing",
      animationLoop: true,
    });

    $('.directionNav').flexslider({
      controlNav: false,
      directionNav: true
    });

    $('.base-slider').flexslider({
      controlNav: false,
      directionNav: false
    });

  });

  $window.resize(function(){
    var gridSize = getGridSize();

    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });

})(jQuery);
