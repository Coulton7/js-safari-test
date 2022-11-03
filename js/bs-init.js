$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
  var allRegions = $("#Map > *");

  allRegions.on("click", function() {
    var link = (allRegions.attr('id'));
    var county;
    if (link == "Yorkshire_and_the_Humber") {
      county = "Yorkshire and the Humber";
      $('millClose').addClass('show');
    }
    allRegions.removeClass("on");
    $('#location-details').modal('show');
    $(this).addClass("on");
    $('body').addClass("noscroll");
  })
});
