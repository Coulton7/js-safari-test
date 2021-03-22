$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
  var allRegions = $("#Map > *");

  allRegions.on("click", function() {
    var link = ($(this).attr('id'));
    if (link == "Yorkshire_and_the_Humber"){
      $('.millClose').addClass('show');
    }
    allRegions.removeClass("on");
    $(this).addClass("on");
    $('.location-pop-up').dialog({
      width: 600,
      height: 'auto',
      modal:true,
      title: 'Location Details',
      overlay: { backgroundColor: "#000", opacity:0.9},
      close: function(){
      },
    });
    $('.location-pop-up').on("dialogclose", function(){
      if(link == "Yorkshire_and_the_Humber"){
        $('.millClose').removeClass('show');
      }
    });
  });
});
