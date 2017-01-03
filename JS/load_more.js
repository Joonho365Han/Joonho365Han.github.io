$(function(){

    //  Must be 1 or more.
    var postblockCount = 1;

    //  Pre-load some posts just in case webpage is shorter than browser.
    $.get("../Posts/postblock_" + postblockCount-- + ".html", function(DOMstring){
        $("#blogpost_container").append(DOMstring);
    });

    //  Load more whenever scroll reaches bottom
    $(window).scroll(function(){
        if ($(window).scrollTop() >= $(document).height() - $(window).height())
            if (postblockCount)
                $.get("../Posts/postblock_" + postblockCount-- + ".html", function(DOMstring){
                    $("#blogpost_container").append(DOMstring);
                });
    });
});