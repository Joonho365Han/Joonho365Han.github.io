$(document).ready(function(){

    var postNumber = 7;

    //  If webpage is shorter than browser, pre-load posts.
    while ($(window).scrollTop() >= $(document).height() - $(window).height() && postNumber){
        $("#blogpost_container").append($.get("../Posts/post_" + postNumber-- + ".html"));
    }

    //  Load more whenever scroll reaches bottom
    $(window).scroll(function(){
        if ($(window).scrollTop() >= $(document).height() - $(window).height())
        {
            var loadMore = 3;
            while (postNumber && loadMore--)
            {
                $.get("../Posts/post_" + postNumber-- + ".html", function(DOMstring){
                    $("#blogpost_container").append(DOMstring);
                });
            }
        }
    });
});