function countdown(){
  var i = document.getElementById('counter');
  if (parseInt(i.innerHTML)<=0){
    var text = "to the global website";
    var new_text = text.replace("to the gloabl website", "If re-direct has failed click thelink to the site");
    document.write(new_text);
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
