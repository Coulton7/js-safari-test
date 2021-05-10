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

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 7000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 100 - Math.random() * 100;

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        
    };
