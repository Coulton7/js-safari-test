(function($){
  $(document).ready(function() {

    function getUrlVars()
    {
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++)
      {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
    }

    var salesString = getUrlVars()["s"];
    if(salesString=='m'){
      document.getElementById('sales-ml').style.display = 'block';
    }
    else if (salesString=='l') {
      document.getElementById('sales-li').style.display = 'block';
    }
  });
})(jQuery);
