(function($){
    $("#overlay-btn").click(
    function navBtn() {
        document.getElementById('overlay-btn').classList.toggle("change");
        var x = document.getElementById('myNav');
        var y = document.getElementById('main-nav');
        if (x.style.height === "100%") {
            x.style.height = "0%";
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
})(jQuery);
