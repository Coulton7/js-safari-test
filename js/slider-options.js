(function($) {

  var $window = $(window),
  flexslider = { vars:{} };

  function getGridSize() {
    return (window.innerWidth < 768) ? 2 :
           (window.innerWidth < 992) ? 3 :
           (window.innerWidth < 1200) ? 4 : 4;
  }

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
        var curSlide = slider.find("li.flex-active-slide");
        var id = ($(curSlide).attr("id"));
        var content = ($(curSlide, id).attr("data-type"));
        var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

        $(ele).hide().appendTo($('.flex-active-slide p.typewrite')).each(function (i) {
            $(this).delay(50 * i).css({
                display: 'inline',
                opacity: 0
            }).animate({
                opacity: 1
            }, 50);
        });
      },
      after: function(slider){

        var headline = document.querySelectorAll('.flex-active-slide p.typewrite').innerHTML;
        if (headline === null || headline === ""){

        var curSlide = slider.find("li.flex-active-slide");
        var id = ($(curSlide).attr("id"));
        var content = ($(curSlide, id).attr("data-type"));

        console.log(headline);

        var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

        $(ele).hide().appendTo($('.flex-active-slide p.typewrite')).each(function (i) {
            $(this).delay(50 * i).css({
                display: 'inline',
                opacity: 0
            }).animate({
                opacity: 1
            }, 50);
          });
        } else {
          return false;
        }
      },
      animation: "fade",
      slideshowSpeed: 5000,
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
