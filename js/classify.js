$(function(){
    $("#leftbox").on("click","li",function(){
        $(this).addClass("cur");
        $(this).siblings().removeClass("cur");
        var a=$(this).parent().children("li").index($(this));
        // var a=$(this).index($(this));
        let b= a*48;
        $(this).parent().scrollTop(b);
        // $(this).parent().animate({scrollTop:b}, 400);
        $(".container_right").eq(a).slideDown(800).siblings().hide();
    });
    $(".container_right").not($(".container_right")[0]).hide();  
});

$(function(){
    var nav = $(".head_right").children().children();
    $(nav).click(function(){
        $(".nav_list").toggle();
    });
})
