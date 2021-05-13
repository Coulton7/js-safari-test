(function($){
  document.addEventListener('DOMContentLoaded', function() {
    var options = {
      useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.',
    };

    var count = new CountUp('car-counter', 0, 529500000, 0, 7,  options);

    jQuery(window).on("resize scroll", function(){
      var scrollPosition = jQuery(window).scrollTop();
      var viewportHeight = window.innerHeight();
      var offset = jQuery("#car-counter").offset();
      var elementHeight = jQuery("#car-counter").height();
      if(offset.top > scrollPosition - elementHeight && offset.top < scrollPosition + viewportHeight) {
        if (!count.error) {
          count.start();
        } else {
          console.error(count.error);
        }
      } else {
        return false;
      }
    })
  });
})(jQuery);
