$(function(){

    var postCount = 1;

    //  Pre-load some posts just in case webpage is shorter than browser.
    for (var i=0; i<10 && postCount; i++)
        $.get("../Posts/post_" + postCount-- + ".html", function(DOMstring){
            $("#blogpost_container").append(DOMstring);
        });

    //  Load more whenever scroll reaches bottom
    $(window).scroll(function(){
        if ($(window).scrollTop() >= $(document).height() - $(window).height())
        {
            var loadMore = 10;
            while (postCount && loadMore--)
                $.get("../Posts/post_" + postCount-- + ".html", function(DOMstring){
                    $("#blogpost_container").append(DOMstring);
                });
        }
    });
});