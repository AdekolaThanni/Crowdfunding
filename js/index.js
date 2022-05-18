$(".modal__box").click(function(){
    var position = $(this).attr("id");

    $(this).css("border","2px solid hsl(176, 50%, 47%)");
    $(".modal__box:not(.modal__box#" + position + ")").css("border","1px solid hsl(0, 0%, 48%)");

    $(".modal__box > .modal__radio:not(.modal__box#" + position + " > .modal__radio)").attr("checked", false);
    $(".modal__box#" + position + " > .modal__radio").attr("checked", true); 
    
    $(".modal__box#" + position + " > .pledge-box").css("display","flex");
    $(".modal__box > .pledge-box:not(.modal__box#" + position + " > .pledge-box)").css("display", "none");
})

$(".modal__close").click(function(){
    $(".modal-background,.modal").css("visibility", "hidden");
    $(".modal-background, .modal").css("opacity", "0");
    $(".modal").css("transform", "translateY(20rem) scale(.5)");
})

$(".modal__open").click(function(){
    $(".modal-background, .modal").css("visibility", "visible");
    $(".modal-background, .modal").css("opacity", "1");
    $(".modal").css("transform", "translateY(20rem) scale(1)");
})

$(".btn-continue").click(function(){
    $(".success").css("visibility", "visible");
    $(".success").css("opacity", "1");
    $(".success").css("transform", "translateX(-50%) scale(1)");
    $(".modal").css("visibility", "hidden");
    $(".modal").css("opacity", "0");
    $(".modal").css("transform", "translateY(20rem) scale(.5)");
})

$(".success__button").click(function(){
    $(".modal-background, .success").css("visibility", "hidden");
    $(".modal-background, .success").css("opacity", "0");
})

// Hamburger switch

$(".hamburger").click(function(){
    $(".header__navigation").toggleClass("hamburger-mode");

    if ($(".hamburger").attr("src") == "images/icon-hamburger.svg") {
        $(".hamburger").attr("src", "images/icon-close-menu.svg");
        $(".hamburger").css("width", "20px");
    } else {
        $(".hamburger").attr("src", "images/icon-hamburger.svg");
        $(".hamburger").css("width", "30px");
    }
})






