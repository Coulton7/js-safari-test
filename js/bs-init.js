  $(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(document).ready(function() {
    var allRegions = $("#Map > *");

    allRegions.on("click", function() {
      allRegions.removeClass("on");
      $(this).addClass("on");
    });
  });

$(function(){
  $("#Map > *").click(function(){
    link = ($(this).attr('id'));
    console.log(link);
  });
});
