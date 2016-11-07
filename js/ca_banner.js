var w=$(window).width();
var first=true;//是否刚开始加载页面
var imgarr=[];   //获取要加载的图片
var loadcount=0;  //图片加载好的数目，初始为0
var banner_length=$(".ca_banner_list li").length;//轮播图片长度
var index=$(".ca_banner_arrow_list .ca_select").index();//banner 索引
var preindex=index;
var setIntervalId=null;
//图片渲染，页面初始化
initDom();

//绑定事件
bindEvents();
//动画形式初始化,当图片加载完才可以动画式初始化
imgarr[imgarr.length-1].onload=function(){
    move();
}



//绑定事件
function bindEvents(){
    setIntervalId=setInterval(function(){
        $(".ca_banner_arrowR")[0].click();
    },5000);

    $(".ca_banner_arrow_list").on("click",function(e){
        if($(e.target).hasClass("ca_banner_arrow_list")){return;}
        if($(e.target).hasClass("ca_select")){return;}
        index=$(e.target).index();
        change(index);
    });
    $(".ca_banner_arrowL").on("click",function(e){
        index=(index==0)?(banner_length-1):(--index);
//                console.log(index);
        change(index);
    });
    $(".ca_banner_arrowR").on("click",function(e){
        index=(index==banner_length-1)?0:(++index);
        console.log(index);
        change(index);
    });
    $(".ca_banner").on("mouseenter",function(){
        if(setIntervalId){
            clearInterval(setIntervalId);
            setIntervalId=null;
        }
        $(".ca_banner_arrowL,.ca_banner_arrowR").stop(true,false).fadeIn(800);
    });
    $(".ca_banner").on("mouseleave",function(){
        if(!setIntervalId){
            setIntervalId=setInterval(function(){
                $(".ca_banner_arrowR")[0].click();
            },5000);
        }
        $(".ca_banner_arrowL,.ca_banner_arrowR").stop(true,false).fadeOut(500);
    });
    window.onresize=function(){
        move();
    }
}

//改变banner和arrow
function change(index){
    $(".ca_banner_arrow_list li").removeClass("ca_select");
    $(".ca_banner_arrow_list li").eq(index).addClass("ca_select");
    $(".ca_banner_list li").eq(preindex).stop(true,false).fadeOut(800);
    $(".ca_banner_list li").eq(index).stop(true,false).fadeIn(800);
    preindex=index;
}

function move(){
    w=$(window).width();
    //28是padding
    var arrow_list=$(".ca_banner_arrow_list").width()+28;
    var arrow_list_left=(w-arrow_list)/2;

    if(first){   //页面加载
        $(".ca_loading").fadeOut(1000);
        $(".ca_banner_list").slideDown(1000,function(){
            $(".ca_banner_arrowL,.ca_banner_arrowR").fadeIn(1000,"linear",function(){
                $(".ca_banner_arrow_list").stop(true,false).animate({
                    "top":"350px",
                },1000,"linear",function(){
                    $(".ca_banner_arrow_list").animate({
                        "left":arrow_list_left+"px",
                    },700,"linear");
                });
            });
        });
        first=false;
    }else{
        $(".ca_banner_arrow_list").stop(true,false).animate({
            "left":arrow_list_left+"px",
        },700,"linear");
    }
}

function initDom(){
    //给a加上图片
    $(".ca_banner_list>li>a").each(function(index,value){
        $(this).css({
            background:'url('+this.dataset['path']+') no-repeat center center',
        });
        var img=document.createElement("img");
        img.src=this.dataset['path'];
        imgarr.push(img);
    });
    //banner list 隐藏
    $(".ca_banner_list").hide();
    //banner arrow左右控制器隐藏
//            $(".ca_banner_arrow_controls").hide();
    $(".ca_banner_arrowL,.ca_banner_arrowR").hide();
    //banner list li
    $(".ca_banner_list li").hide();
    //banner_list li[index]
    $(".ca_banner_list li").eq(index).show();
}

