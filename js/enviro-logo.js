(function($) {

  $.fn.enviroLogo = function() {

    var enviro_logo = jQuery(".enviro_logo");
    var enviroLogo = -1;
    var runCount = 0;

    function showNextLogo() {
      if (runCount < 101) {
        ++enviroLogo;
        enviro_logo.eq(enviroLogo % enviro_logo.length)
          .show(0)
          .delay(8000)
          .hide(0, showNextLogo);
        runCount++;
      } else {
        enviro_logo.eq(enviroLogo % enviro_logo.length)
          .show(0);
      }
    }
    showNextLogo();
  };

  $.fn.mobEnviroLogo = function() {
    var mob_enviro_Logo = $(".mob-enviro-logo");
    var mobEnviroLogo = -1;
    var mobRunCount = 0;

    function mobShowNextLogo() {
      if (mobRunCount < 101) {
        ++mobEnviroLogo;
        mob_enviro_Logo.eq(mobEnviroLogo % mob_enviro_Logo.length)
          .show(0)
          .delay(8000)
          .hide(0, mobShowNextLogo);
        mobRunCount++;
      } else {
        mob_enviro_Logo.eq(mobEnviroLogo % mob_enviro_Logo.length)
        .show(0);
      }
    }
    mobShowNextLogo();
  };


  $(document).ready(function() {
    if($('.envirologo-container').is(':visible')) {
      $('.envirologo-container').enviroLogo();
    }

    if($('.mob-envirologo-container').is(':visible')) {
      $('.mob-envirologo-container').mobEnviroLogo();
    }
  });
})(jQuery);
