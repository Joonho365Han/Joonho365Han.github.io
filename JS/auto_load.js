$(document).ready(function(){

    alert("jquery loaded!");
    int postNumber = 4;

    $(window).scroll(function(){
        if ($(window).scrollTop() >= $(document).height() - $(window).height()) {

            int loadMore = 3;

            if (postNumber && loadMore){
                $("#blogpost_container").append($("blogpost_" + postNumber + ".html").contents());
                postNumber -= 1;
                loadMore   -= 1;
            }
        }
    });
});