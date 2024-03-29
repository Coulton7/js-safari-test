$(document).ready(function() {
  var allRegions = $("#Map > *");

  allRegions.on("click", function() {
    var link = ($(this).attr('id'));
    var county;
    if (link == "Yorkshire_and_the_Humber") {
      $('.millClose').addClass('show');
      county = "Yorkshire and the Humber";
    }
    allRegions.removeClass("on");
    $(this).addClass("on");
    $('body').addClass("noscroll");
    $('.location-pop-up').dialog({
      open: function(event, ui) {
        $('.ui-dialog-titlebar-close').removeClass("ui-button-icon-primary ui-icon ui-icon-closethick").html('<span class="close-dialog">&#215;</span>');
        $('.ui-dialog-title').addClass('h2').addClass('text-center');
      },
      width: "70%",
      height: ($(window).height()-250),
      modal: true,
      zIndex: 500,
      position: { my: "bottom", at:"bottom", of: window},
      title: "Regional sales & contact Details for " + county,
      draggable: false,
      resizable: false,
      close: function() {},
    });
    $('.location-pop-up').on("dialogclose", function() {
      allRegions.removeClass("on");
      $('body').removeClass("noscroll");
      $('.location-pop-up').on("dialogclose", function() {
        allRegions.removeClass("on");
        $('body').removeClass("noscroll");
        if (link == "Yorkshire_and_the_Humber") {
          $('.millClose').removeClass('show');
        }
      });
    });
  });
});
