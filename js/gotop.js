$(function(){
    $(".content").scroll(function(){
        var scroll = $(".content").scrollTop();
        if(scroll>=50){
            $(".gotop_box").css({"display":"block","z-index":"1"});
        }else{
            $(".gotop_box").css("display","none");            
        }
    }) 
})
$(function(){
    $(".gotop_box").click(function(){
        $(".content").animate({scrollTop:0}, 500);
    })
})