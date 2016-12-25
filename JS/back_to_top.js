$(function(){
    $(window).scroll(function(){
        $('a[id="button_to_top"]').css('visibility', ($(window).scrollTop() >= $(window).height()) ? 'visible' : 'hidden');
    });

    $('a[id="button_to_top"]').click(function(e){
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
});