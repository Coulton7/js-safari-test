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
    $('body').addClass("noscroll")
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

var aText = $('typewrite').attr('data-type');
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementsByClassName("wrap");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
