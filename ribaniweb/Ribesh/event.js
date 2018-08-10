$(document).ready(function () {

    $("#j").click(function () {

        alert(7);    });

    $(".c").dblclick(function () {


        $(this).text("i was kidding hahaha u fool");

    });

    $(".d").mouseenter(function () {


        $(this).css({ "color": "red" });

    });

    $(".d").mouseleave(function () {


        $(this).css({ "color": "black" });

    });


});