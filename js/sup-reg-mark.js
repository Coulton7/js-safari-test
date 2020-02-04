(function($) {
  $(document).ready(function() {
    $('body :not(script)').contents().filter(function() {
        return this.nodeType === 3;
    }).replaceWith(function() {
      if(this.nodeValue == /\bWarman<sup>&reg;<\/sup>\b/gi ){
        return;
      }else{
        this.nodeValue.replace(/\bWarman\b/gi, "$&<sup>&reg;</sup>");
      }
        return this.nodeValue.replace(/[™®©]/gi, '<sup>$&</sup>');
    });
  });
})(jQuery);
