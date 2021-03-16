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

function printLink(link){
  jQuery("svg.uk").click(function(){
    var idClicked = jQuery(this).attr('id');
    console.log(idClicked)
  });

}
