$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
  var allRegions = $("#Map > *");
  var link = ($(this).attr('id'));
  if (link == "Yorkshire_and_the_Humber"){
    $('.millClose').addClass('show');
  }

  allRegions.on("click", function() {
    allRegions.removeClass("on");
    $(this).addClass("on");
    $('.location-pop-up').dialog({
      width: 600,
      height: 'auto',
      modal:true,
      title: 'Location Details',
      overlay: { backgroundColor: "#000", opacity:0.9},
      close: function(){
        link.removeClass('show');
        allRegions.removeClass('on');
      }
    });
  });
});
