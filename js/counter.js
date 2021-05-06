(function($){
  document.addEventListener('DOMContentLoaded', function() {
    var options = {
      useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.',
    };

    var count = new CountUp('car-counter',  0, 353500000, 5, options);
    if (!count.error) {
      count.start();
    } else {
      console.error(count.error);
    }
  });
})(jQuery);
