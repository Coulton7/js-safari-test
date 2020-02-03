function countdown(){
  var i = document.getElementById('counter');
  var x = document.getElementById('replace');
  if (parseInt(i.innerHTML)<=0){

  return;

  }
  if (parseInt(i.innerHTML)!=0){
    i.innerHTML = parseInt(i.innerHTML)-1;
  }
}

(function($){
  $(document).ready(function(){
    setInterval(function(){countdown();},1000);
  });
})(jQuery);
