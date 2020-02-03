(function($) {
  $(document).ready(function() {
    $("body").html(
      $("body").html()
        .replace(/((?!<sup>\s*))&reg;((?!\s*<\/sup>))/gi, '<sup>&reg;</sup>') // wrap &reg; if not wrapped yet
        .replace(/((?!<sup>\s*))®((?!\s*<\/sup>))/gi, '<sup>&reg;</sup>') // wrap ® if not wrapped yet
    );
  });
})(jQuery);
