  $(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(document).ready(function() {
    var allRegions = $("#map > *");

    allRegions.on("click", function() {
      allRegions.removeClass("on");
      $(this).addClass("on");
    });
  });
