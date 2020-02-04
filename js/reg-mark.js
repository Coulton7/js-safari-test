(function($) {
  $(document).ready(function() {
    function recurse(element) {
      if (element.childNodes.length > 0) {
        for (var i = 0; i < element.childNodes.length; i++) {
          recurse(element.childNodes[i]);
        }
      }
      if (element.nodeType == 3 && /\S/.test(element.nodeValue)) {
        doReplacements(element, element.parentElement);
      }
    }
    var html = document.getElementsByTagName('html')[0];
    recurse(html);
    function doReplacements(element, parent) {
      var html = element.data;
      if (element.nextSibling) {
        if (element.nextSibling.nodeName.toLowerCase() == 'sup') {
          return;
        }
      }
      html = element.data.replace(/\bWarman\b/gi, "$&<sup>&reg;</sup>");

    }
  });
})(jQuery);
