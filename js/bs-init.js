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

document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter

  var dataText = $('typewrite').attr('data-type')[0];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.getElementsByClassName('typewrite').innerHTML = text.substring(0, i+1) +'<span class="wrap"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
