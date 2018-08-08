$(document).ready(function() {

    $("p").css({"color":"red"});
    $("#p1").css({ "color": "blue" });
    
    
    $("#p1").mouseenter(function () {

        $(".p3").css({ "color": "yellow" });
    });
    $("#p1").mouseleave(function () {

        $(".p3").css({ "color": "red" });
    });
    $("input").focus(function () {
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function () {
        $(this).css("background-color", "#ffffff");
    });

































});

