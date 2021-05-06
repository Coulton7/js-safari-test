(function($){

  import { CountUp } from '../js/countUp.min.js';

  $(document).ready(function() {
    const count = new Countup('#counter', 353500000);
    if (!count.error) {
      count.start();
    } else {
      console.error(count.error);
    }
  });
})(jQuery);
