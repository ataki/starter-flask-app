$(document).ready(function() {
    $(".banner h1").css("opacity", "0")
        .animate({
            "margin-top": "+100px",
            "opacity": "1.0"
        }, 500, "linear");
    
    $(".banner p").css("opacity", "0")
        .delay(250)
        .animate({
            "margin-top": "+20px",
            "opacity": "1.0"
        }, 500, "linear");

    $("#cta-1").click(function() {
      $("html, body").animate({"scrollTop": 450})
    });

    $("#cta-2").click(function() {
      $("html, body").animate({"scrollTop": 900})
    });

    setTimeout(function() { 
      $(".messages").fadeOut(1000);
    }, 3000);
});
