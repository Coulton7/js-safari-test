(function($) {

  var $window = $(window),
  flexslider = { vars:{} };

  function getGridSize() {
    return (window.innerWidth < 768) ? 2 :
           (window.innerWidth < 992) ? 3 :
           (window.innerWidth < 1200) ? 4 : 4;
  }

  var TxtType = function(el, toRotate, period) {
          this.toRotate = toRotate;
          this.el = el;
          this.loopNum = 0;
          this.period = parseInt(period, 10) || 7000;
          this.txt = '';
          this.tick();
      };

      TxtType.prototype.tick = function() {
          var i = this.loopNum % this.toRotate.length;
          var fullTxt = this.toRotate[i];

          if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
          }

          this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

          var that = this;
          var delta = 100 - Math.random() * 100;

          if (this.isDeleting) { delta /= 2; }

          if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = false;
          } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum==1;
          delta = 500;
          }

          setTimeout(function() {
          that.tick();
          }, delta);
      };

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
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
      },
      after: function(slider){
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
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
