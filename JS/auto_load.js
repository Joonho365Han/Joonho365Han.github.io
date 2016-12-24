$(document).ready(function(){

    var postNumber = 7;

    //  If window is taller than website, pre-load posts.
    while ($(window).scrollTop() >= $(document).height() - $(window).height() && postNumber){
        $.get("../Posts/post_" + postNumber-- + ".html", function(DOMstring){
            $("#blogpost_container").append(DOMstring);
        });
    }

    //  Load more whenever scroll reaches bottom
    $(window).scroll(function(){
        if ($(window).scrollTop() >= $(document).height() - $(window).height())
        {
            var loadMore = 6;
            while (postNumber && loadMore--)
            {
                $.get("../Posts/post_" + postNumber-- + ".html", function(DOMstring){
                    $("#blogpost_container").append(DOMstring);
                });
            }
        }
    });
});