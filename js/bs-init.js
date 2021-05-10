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
    $('body').addClass("noscroll");
    $('.location-pop-up').dialog({
      width: "70%",
      height: 'auto',
      modal:true,
      title: 'Location Details',
      close: function(){
      },
    });
    $('.location-pop-up').on("dialogclose", function(){
      allRegions.removeClass("on");
      $('body').removeClass("noscroll");
      if(link == "Yorkshire_and_the_Humber"){
        $('.millClose').removeClass('show');
      }
    });
  });
});
