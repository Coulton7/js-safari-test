(function($) {
  $(document).ready(function() {
    $(document.body).html($(document.body).html().replace(/((<sup>\s*))®((\s*<\/sup>))\s((<sup>\s*))®((\s*<\/sup>))/gi, "<sup>&reg;</sup>"));
  });
})(jQuery);
