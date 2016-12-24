$(document).ready(function(){

    var postNumber = 7;
    $(window).scroll(function(){
        if ($(window).scrollTop() >= $(document).height() - $(window).height())
        {
            var loadMore = 6;
            while (postNumber && loadMore--)
            {
                $.get("../Posts/blogpost_" + postNumber-- + ".html", function(DOM){
                    $("#blogpost_container").append(DOM);
                });
            }
        }
    });
});