$(document).ready(function(){

    var postNumber = 29;
    var preLoadCount = 10;

    //  Pre-load some posts just in case webpage is shorter than browser.
    while (preLoadCount-- && postNumber)
        $.get("../Posts/post_" + postNumber-- + ".html", function(DOMstring){
            $("#blogpost_container").append(DOMstring);
        });

    //  Load more whenever scroll reaches bottom
    $(window).scroll(function(){
        if ($(window).scrollTop() >= $(document).height() - $(window).height())
        {
            var loadMore = 10;
            while (postNumber && loadMore--)
            {
                $.get("../Posts/post_" + postNumber-- + ".html", function(DOMstring){
                    $("#blogpost_container").append(DOMstring);
                });
            }
        }
    });
});