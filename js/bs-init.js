  $(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(document).ready(function() {
    var allRegions = $("svg.uk > g#map > path");

    allRegions.on("click", function() {
      allRegions.removeClass("on");
      $(this).addClass("on");
    });
  });
