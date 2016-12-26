$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() >= $('div[id="blogpost_container"]').offset().top)
        {
            $('a[id="button_to_top"]').css('visibility', 'visible').fadeTo(250, 0.4);
        }
        else
        {
            $('a[id="button_to_top"]').fadeTo(250, 0, function(){
                $('a[id="button_to_top"]').css('visibility', 'hidden');
            });
        }
    });

    $('a[id="button_to_top"]').click(function(e){
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
});