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
      before: function(){
        // array with texts to type in typewriter
        var dataText = elements[i].getAttribute('data-type');

        // type one text in the typwriter
        // keeps calling itself until the text is finished
        function typeWriter(text, i, fnCallback) {
          // chekc if text isn't finished yet
          if (i < (text.length)) {
            // add next character to h1
            document.querySelector("p").innerHTML = text.substring(0, i + 1) + '<span class="wrap"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function() {
              typeWriter(text, i + 1, fnCallback);
            }, 100);
          }
          // text finished, call callback if there is a callback function
          else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
          }
        }
        // start a typewriter animation for a text in the dataText array
        function StartTextAnimation(i) {
          if (typeof dataText[i] == 'undefined') {
            setTimeout(function() {
              StartTextAnimation(0);
            }, 20000);
          }
          // check if dataText[i] exists
          if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function() {
              // after callback (and whole text has been animated), start next text
              StartTextAnimation(i + 1);
            });
          }
        }
        // start the text animation
        StartTextAnimation(0);
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
