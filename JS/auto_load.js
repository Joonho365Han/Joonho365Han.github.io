$(document).ready(function(){

    var postNumber = 1;
    $(window).scroll(function(){
        if ($(window).scrollTop() >= $(document).height() - $(window).height())
        {
            var loadMore = 3;
            while (postNumber && loadMore--)
            {
                $.get("../Posts/blogpost_" + postNumber-- + ".html", function(DOM){
                    $("#blogpost_container").append(DOM);
                });
            }
        }
    });
});