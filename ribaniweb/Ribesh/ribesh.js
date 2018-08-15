$(document).ready(function () {

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

    //$("#b").click(function () {
    //    $("#hhh").animate({ left: '250px' });
    //});
    //$("button").click(function () {
    //    $("div").animate({ left: '250px' });
    //});
    //$("#b").click(d);

    //    function d () {
    //    $("#hhh").animate({ left: '250px' });
    //};

    $("#b").click(ribesh);

    function ribesh() {

        $("#pp").addClass("blue");

        $("#dd").text("start").fadeOut(1000).fadeIn(1000).hide(1000).show(1000,ddd);

    };

    function ddd() {
        $("#dd").text("done");
    }

    $("#t").click(function () {
        $.get("ajax.html", function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
            $("#r").text(data);
        });
    });
});