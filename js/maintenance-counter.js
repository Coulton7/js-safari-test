function countdown(){
  var i = document.getElementById('counter');
  if (parseInt(i.innerHTML)<=0){

  document.body.innerHTML = document.body.innerHTML.replace(/to the gloabl website/g, "If re-direct has failed click the link to the site");


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
