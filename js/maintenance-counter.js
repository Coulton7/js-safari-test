function countdown(){
  var i = document.getElementById('counter');
  if (parseInt(i.innerHTML)<=0){
    window.location.href = 'https://www.aesseal.com/en';
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
