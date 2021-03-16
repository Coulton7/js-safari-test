  $(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(document).ready(function() {
    var allRegions = $("#Map > *");

    allRegions.on("click", function() {
      allRegions.removeClass("on");
      $(this).addClass("on");
      $('.location-pop-up').dialog({
        width: 600,
        height: 'auto',
        modal:true,
        title: 'Location Details',
        overlay: { backgroundColor: "#000", opacity:0.9},
      });
    });
  });

$(function(){
  $("#Map > *").click(function(){
    var link = ($(this).attr('id'));
    console.log(link);
  });
});
