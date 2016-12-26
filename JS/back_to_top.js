$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() >= $('div[id="blogpost_container"]').offset().top)
            $('a[id="button_to_top"]').fadeTo(250, 0.4);
        else
            $('a[id="button_to_top"]').fadeTo(250, 0);
    });

    $('a[id="button_to_top"]').click(function(e){
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
});