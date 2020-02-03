function countdown(){
  var i = document.getElementById('counter');
  if (parseInt(i.innerHTML)<=0){
    
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
