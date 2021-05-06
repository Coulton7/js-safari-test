(function($){
  document.addEventListener('DOMContentLoaded', function() {
    var options = {
      startVal: 0,
      duration: 5,
      useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.',
    };

    var count = new CountUp('car-counter', 353500000, options);
    if (!count.error) {
      count.start();
    } else {
      console.error(count.error);
    }
  });
})(jQuery);
