$(document).ready(function() {
    $(".hamburger-btn").click(function() {
        $(".navigation-slide").slideToggle("slow");
        $(this).toggleClass("navigation-visible");
    });
});
