﻿$(document).ready(function () {

    $("h1").css({ "color": "red", "font-family": "algerian", "font-size": "42px" });

    $("#h").css({ "color": "white", "font-family": "microsoft sans serif", "font-size": "22px" });





    $("h1").dblclick(function () {

        alert("this website wants connect with you")

    });

    $(".jumbotron").mouseenter(function () {

        $("#tk").css({"color":"green"});

    });

    $(".jumbotron").mouseleave(function () {

        $("#tk").css({ "color": "red" });

    });
    var text = $("#h").text();
    $("#h").css({ "cursor": "pointer" });
    $("#h").mousedown(function () {


        $(this).text("tokyo ghoul tokyo ghoul tokyo ghoul tokyo ghoul tokyo ghoultokyo ghoultokyo ghoultokyo ghoultokyo ghoul");

    });

    $("#h").mouseup(function () {
        $(this).text(text);

    });

    $("#b").click(function () {
        //$("#hhh").toggle(10000);

        $("#hhh").animate({left :"350px",opacity: '0.5',height: '250px',width: '250px',"font-size":"42px"});
    });



    $("#cl").css({ "color": "blue", "font-family": "algerian", "font-size": "42px" });

    $("#bt").click(function () {
        $("#cl").addClass("blue");
    });


});