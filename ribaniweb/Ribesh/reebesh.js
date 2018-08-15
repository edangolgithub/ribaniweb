$(document).ready(function () {

    //$("#h").css({ "color": "red", "font-family": "'Segoe Script'", "font-size": "42px", "margin": "20px" });
   
    $("#tg").addClass("clss");


    $("#h").click(function () {
        
    })
  
    $(".cl").click(function () {
        $(this).animate({ left: "300px" },"slow");
        $(this).fadeOut(2000, function () {
            $(this).css({ "position": "absolute", "height": "0px", "width": "0px" });
            $(this).fadeIn(3000);
             $(this).animate({ height: "450px", width: "330px" },"slow");
        });
       
        
        
       
    });




});