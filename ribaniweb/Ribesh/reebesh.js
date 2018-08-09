$(document).ready(function () {

    $("#h").css({ "color": "lawngreen", "font-family": "algerian", "font-size": "42px" , "margin":"20px" });
    $("#tg").addClass("clss");


    $("#h").click(function () {
        
    })
  
    $(".cl").click(function () {
        $(this).animate({ left: "300px" });
        $(this).fadeOut(2000).fadeIn(3000);
        $(this).css({ "position": "absolute" });
       
    });




});