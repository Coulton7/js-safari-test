(function($){
  $( document ).ready(function() {
    $(".form-select").chosen({
      disable_search_threshold: 10,
      no_results_text: "Sorry, no results found."
    });
  });
})(jQuery);

(function($) {
  $(document).ready(function() {
    $('#productEnquiry').on('shown.bs.modal', function() {
      $('.chosen-select', this).chosen();
    });
  });
})(jQuery);
