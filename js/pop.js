$(".menu-burder").click(function(){
    $(".nav").addClass("open");
    $(".visible").addClass("open-vis");
});

$(".visible").click(function(){
    $(".nav").removeClass("open");
    $(".visible").removeClass("open-vis");
});