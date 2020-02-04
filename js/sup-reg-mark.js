(function($) {
  $(document).ready(function() {
    $('body :not(script)').contents().filter(function() {
        return this.nodeType === 3;
    }).replaceWith(function() {
        return this.nodeValue.replace(/[™®©]/gi, '<sup>$&</sup>')
        .replace(/\bWarman\b/gi, "$&<sup>&reg;</sup>");
    });
  });
})(jQuery);
