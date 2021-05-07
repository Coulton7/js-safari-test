(function($){
  document.addEventListener('DOMContentLoaded', function() {
    var options = {
      duration: 8,
      useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.',
    };

    var count = new CountUp('car-counter', 0, 353500000, 0, 8,  options);
    if (!count.error) {
      count.start();
    } else {
      console.error(count.error);
    }
  });
})(jQuery);
