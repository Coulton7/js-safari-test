(function($) {
  $(document).ready(function() {
    $('body :not(script, sup)').contents().filter(function() {
        return this.nodeType === 3;
    }).replaceWith(function() {
        return this.nodeValue.replace(/[™®©]/gi, '<sup>$&</sup>');
    });
  });
})(jQuery);

(function($) {
  $(document).ready(function() {
    $(document.body).html($(document.body).html().replace(/((<sup>\s*))®((\s*<\/sup>))\s((<sup>\s*))®((\s*<\/sup>))/gi, "<sup>&reg;</sup>"));
  });
})(jQuery);
