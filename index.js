$(function(){
    var ul=$("ul")
    var ol=$("ol")
    var ul_lis=$("ul li")
    var ol_lis=$("ol li")
    var next=$(".next")
    var prev=$(".prev")
    var num=0;
    var dian=0;
    //下一页
    next.on("click",function(){
        ++num;
        ++dian;
        if(num>=3){
            num=0;
            dian=0;
        }
        ul.css("marginLeft",-num*1200)
        ol_lis.removeClass("dian")
        $("ol li").eq(dian).addClass('dian')
    })
    //上一页
    prev.on("click",function(){
        --num;
        --dian;
        if(num<0){
            num=2;
            dian=2
        }
        ul.css("marginLeft",-num*1200)
        ol_lis.removeClass("dian")
        $("ol li").eq(dian).addClass('dian')
    })
    //小点控制轮播
    ol_lis.on("click",function(){
        ol_lis.removeClass("dian")
        $(this).addClass("dian")
        num=$(this).index();
        ul.css("marginLeft",-num*1200)
    })
    //自动轮播
    var time=setInterval(function(){
        next.click();
    },1000)
    //鼠标移上停止轮播移下自动轮播
    $(".box").on("mouseout",function(){
        window.clearInterval(time)
        time=setInterval(function(){
            next.click();
        },1000)
    })
    $(".box").on("mouseover",function(){
        window.clearInterval(time)
        console.log("hhah")
    })
})