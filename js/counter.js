(function($){
  document.addEventListener('DOMContentLoaded', function() {
    var options = {
      duration: 5,
      useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.',
    };

    var count = new CountUp('car-counter', 0, 353500000, 0, 5,  options);
    if (!count.error) {
      count.start();
    } else {
      console.error(count.error);
    }
  });
})(jQuery);
