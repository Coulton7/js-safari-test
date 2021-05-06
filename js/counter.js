(function($){

  import { CountUp } from '../js/countUp.min.js';

  $(document).ready(function() {
    const count = new CountUp('#counter', 353500000);
    if (!count.error) {
      count.start();
    } else {
      console.error(count.error);
    }
  });
})(jQuery);