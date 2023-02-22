(function($) {
  $.fn.waveFade = function() {
    var self = this;
    var windowHeight = $(window)[0].innerHeight;
    var windowScrollTop = $(window).scrollTop();
    var waveFadeFunction = function() {

      return self.each(function() {
        if (windowScrollTop <= windowHeight) {
          var scrollPercent = windowScrollTop / windowHeight;

          self.find('.textlogo, .section-shadow-menu, .enquiry-icon').css({
            opacity: -1.03 + scrollPercent * 4
          });

        }

      });
    };

    $(window).on('scroll', function() {
      windowHeight = $(window)[0].innerHeight;
      windowScrollTop = $(window).scrollTop();
      waveFadeFunction();
    });

    waveFadeFunction();
    return self;
  };

})(jQuery);

//initialize
$(window).width(function(e) {

  $(document).ready(function() {
    if ($(window).width() > 992) {

      $('body').waveFade();
    } else {
      $('.textlogo, .section-shadow-menu, .enquiry-icon').css({
        "opacity": "1"
      });
    }

    $(window).scroll(function() {
      var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();

      var scrollAmount = (s/(d-c)) * 100;
      var opacity = scrollAmount/100;
      $('.navbar-nav').css({"background-color": "rgba(255,255,255,"+opacity+")"});

      if (opacity >= 0.55) {
        $('.navbar-nav>li>a').addClass('normText');
      }
      else if (opacity < 0.55) {
        $('.navbar-nav>li>a').removeClass('normText');
      }
    })
  });
});
