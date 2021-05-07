(function($){
  document.addEventListener('DOMContentLoaded', function() {
    var options = {
      duration: 7,
      useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.',
    };

    var count = new CountUp('car-counter', 0, 529500000, 0, 7,  options);
    if (!count.error) {
      count.start();
    } else {
      console.error(count.error);
    }
  });
})(jQuery);
