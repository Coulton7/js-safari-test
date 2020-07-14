(function($){
    $(document).ready(function() {
    $("#overlay-btn").click(
    function navBtn() {
        document.getElementById('overlay-btn').classList.toggle("change");
        var x = document.getElementById('myNav');
        var y = document.getElementById('main-nav');
        if (x.style.height === "100%") {
            x.style.height = "0%";
            $('.main').removeClass('active');
            $("body").removeClass('noscroll');
            $('#overlay-btn').addClass('overlay-btn');
            $('.search-block').removeClass('overlay-search');
            $('.fit-menu').removeClass('full-menu');
            $('.navigation_col')removeClass('overlay_menu');
            $(y).addClass('fixed-top');
        } else {
            x.style.height = "100%";
            $('.main').addClass('active');
            $("body").addClass('noscroll');
            $('#overlay-btn').removeClass('overlay-btn');
            $('.search-block').addClass('overlay-search');
            $('.fit-menu').addClass('full-menu');
            $('.navigation_col')addClass('overlay_menu');
            $(y).removeClass('fixed-top');
        }
    });
    $("#mobile-overlay").click(
    function mobileNavBtn(){
        document.getElementById('mobile-overlay').classList.toggle("change");
        var x = document.getElementById('myNav');
        var y = document.getElementById('main-nav');
        if(x.style.height === "100%") {
            x.style.height ="0%";
            $('.main').removeClass('active');
            $("body").removeClass('noscroll');
            $(y).addClass('fixed-top');
        } else {
            x.style.height = "100%";
            $('.main').addClass('active');
            $("body").addClass('noscroll');
            $(y).removeClass('fixed-top');
        }
    });
  });
})(jQuery);
