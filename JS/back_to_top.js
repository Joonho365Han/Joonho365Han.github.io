$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() >= $('div[id="blogpost_container"]').offset().top)
        {
            $('a[id="button_to_top"]').css('visibility', 'visible').css('animation-name', 'half_fade_in').css('-webkit-animation-name', 'half_fade_in');
        }
        else
        {
            $('a[id="button_to_top"]').css('visibility', 'hidden').css('animation-name', 'none').css('-webkit-animation-name', 'none');
        }
    });

    $('a[id="button_to_top"]').click(function(e){
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
});