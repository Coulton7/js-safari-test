(function($){

  var options = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
};

  $(document).ready(function() {
    const count = new CountUp('#counter', 353500000 , 0, 2.5, options);
    if (!count.error) {
      count.start();
    } else {
      console.error(count.error);
    }
  });
})(jQuery);
