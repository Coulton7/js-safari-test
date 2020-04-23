$(document).ready(function() {
  $('#prev').on('click', function() {
    $('.sustain-nav').animate({
      scrollLeft: '-=200'
    }, 300, 'swing');
  });

  $('#next').on('click', function() {
    $('.sustain-nav').animate({
      scrollLeft: '+=200'
    }, 300, 'swing');
  });
});


  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });
