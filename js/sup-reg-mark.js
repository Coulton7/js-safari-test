(function($) {
  $(document).ready(function() {
    $("body").html(
      $("body").html().replace(/&reg;/gi, '<sup>&reg;</sup>').replace(/®/gi, '<sup>&reg;</sup>')); // this will break in script tags and a few other places.
    $("sup sup").each(function() { // find sup with child sup
      $(this).parent("sup").html("&reg;");
    });
  });
})(jQuery);
