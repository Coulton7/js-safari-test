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
    $('body :not(script, sup)').contents().filter(function() {
        return this.nodeType === 3;
    }).replaceWith(function() {
        return this.nodeValue.replace(/((?!<sup>\s*))®((?!\s*<\/sup>))((?!<sup>\s*))®((?!\s*<\/sup>))/gi, '<sup>&reg;</sup>');
    });
  });
})(jQuery);
