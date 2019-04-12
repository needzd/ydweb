// 轮播1
var swiper = new Swiper('.swiper1', {
    loop:true,
    autoplay:{
        delay:2000,
        disableOnInteracion:false,
    },
    pagination: {
    el: '.swp1',
    },
});

// 轮播2
var swiper = new Swiper('.swiper2', {
    loop:true,
    pagination: {
    el: '.swp2',
    },
});

// 轮播3
var swiper = new Swiper('.swiper3', {
    loop:true,
    autoplay:{
        delay:2000,
        disableOnInteracion:false,
    },
    pagination: {
    el: '.swp3',
    },
});


// 文字轮播
$(function(){
    var num=0;
    setInterval(function(){
        num++;
        if(num==4){
            $('.head_con_list').css({'top':'0px'});             
            num=1;
        }
        $('.head_con_list').stop().animate({'top':-38*num+'px'},500)
    },1000)
})

// 倒计时
function countTime() {  
    //获取当前时间  
    var date = new Date();  
    var now = date.getTime(); 

    //设置截止时间  
    var str="2019/4/20 00:00:00";
    var endDate = new Date(str); 
    var end = endDate.getTime();  
    
    //时间差  
    var leftTime = end-now;

    //定义变量h,m,s保存倒计时的时间  
    var h,m,s;  
    if (leftTime>=0) {  
        h = Math.floor(leftTime/1000/60/60);  
        m = Math.floor(leftTime/1000/60%60);  
        s = Math.floor(leftTime/1000%60);                     
    }

        //将0-9的数字前面加上0，例1变为01
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    function checkTime(i){
        if (i<10) {
            i = "0"+i;
        }
        return i;
    }
    //将倒计时赋值到div中    
    document.getElementsByClassName("timerbox")[0].innerHTML = h;  
    document.getElementsByClassName("timerbox")[1].innerHTML = m;  
    document.getElementsByClassName("timerbox")[2].innerHTML = s;  
    //递归每秒调用countTime方法，显示动态时间效果  
    setTimeout(countTime,1000);  
}

$(function(){
    countTime();
})


