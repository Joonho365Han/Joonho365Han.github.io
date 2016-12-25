$(function(){
    $('a[id="button_to_top"]').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});