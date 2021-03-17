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
  $(function(){
    $("#Map > *").click(function(){
      var link = ($(this).attr('id'));
      console.log(link);
      if (link == "Yorkshire_and_the_Humber"){
        document.getElementById('location-details').innerhtml = "<a href='https://www.aesseal.com/en/locations/europe/gb/SYK'<a>Click to see locations in your area</a>";
      }
    });
  });
});
