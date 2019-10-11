$(document).ready(function(){

    $(window).load(function() {
        $(".loader").delay(400).fadeOut("slow");
    });
    $(".post_content table").wrap("<div class='post_table_w'></div>");
    svg4everybody({});

    $(".menu-button").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("is-active");
        $(".m-menu").slideToggle();
    });
});
