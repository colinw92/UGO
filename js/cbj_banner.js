/**
 * Created by ��� on 2016/9/13.
 */
(function (window, undefined) {
    $(function () {
        //�ֲ�ͼ
        var banner = $(".ugo_banner");
        $.ajax({
            url: "http://api.ugo.com/content.php",
            type: "get",
            dataType: "json",
            success: function (data) {
                //�����ֲ�ͼ
                banner.html("");
                var ul = $("<ul></ul>");
                ul.appendTo(banner);
                var dots='';
                //ѭ������li
                for (var i = 0; i <= data.length; i++) {
                    if (data.length == i) {
                        var li = $("<li></li>");
                        li.width(banner.width());
                        li.appendTo(ul);
                        li.css("background", "url(" + data[0].pic + ")  center center no-repeat");
                    } else {
                        var li = $("<li></li>");
                        li.width(banner.width());
                        li.appendTo(ul);
                        li.css("background", "url(" + data[i].pic + ")  center center no-repeat");
                        //ƴ��һ��Բ���ַ���
                        if(i===0){
                            dots +='<a href="javascript:;" class="active"></a>';
                        }else{
                            dots +='<a href="javascript:;" ></a>';
                        }
                    }
                }
                //д�����Ҽ�ͷ
                var arrow = '<div class="arrow">' +
                    '<a href="javascript:;" class="arrowL"></a>' +
                    '<a href="javascript:;" class="arrowR"></a>' +
                    '</div>';
                banner.append(arrow);

                //д��dot
                var dot = $('<div class="dot"></div>');
                banner.append(dot);
                dot.html(dots);
                dot.css("marginLeft",-dot.outerWidth()/2+"px");

                //��ʼ�ֲ�ͼ���¼�
                //���ֲ�ͼ�����¼�
                //�����ֲ�ͼ����
                var index=0;
                //status 0Ϊprev,1Ϊnext
                var moveBanner=function(status){
                    var ul = $(".ugo_banner>ul");
                    if(status==0){
                        index--;
                        if(index<0){
                            index=ul.children().length-2;
                            ul.css("left",-(ul.children().length-1)*banner.width()+"px");
                        }

                    }else{
                        index++;
                        if(index>ul.children().length-1){
                            index=1;
                            ul.css("left","0px");
                        }
                    }
                    $(".ugo_banner>ul").animate({
                        "left":-index*banner.width()+"px"
                    },500,function(){
                        $(".dot").children().removeClass("active");

                        if(index>=ul.children().length-1){
                            $(".dot").children().eq(0).addClass("active");
                        }else{
                            $(".dot").children().eq(index).addClass("active");
                        }
                    });
                }
                var timerId=setInterval(function(){
                    moveBanner(1);
                },3000);

                $(".ugo_banner").on("mouseover",function(){
                    clearInterval(timerId);
                   $(".arrow").show();
                }).on("mouseleave",function(){
                    timerId=setInterval(function(){
                        moveBanner(1);
                    },3000);
                    $(".arrow").hide();
                });
                //��dot����¼�
                $(".dot a").on("click",function(){
                    index=$(this).index();
                    $(".ugo_banner>ul").animate({
                        "left":-index*banner.width()+"px"
                    },500,function(){
                        $(".dot").children().removeClass("active");

                        if(index>=ul.children().length-1){
                            $(".dot").children().eq(0).addClass("active");
                        }else{
                            $(".dot").children().eq(index).addClass("active");
                        }
                    });
                });

                //���ֲ�ͼ����������¼�
                $(".arrowL").on("click",function(){

                    moveBanner(0);
                });
                $(".arrowR").on("click",function(){
                    moveBanner(1);
                });


            }
        })
    })
})(window)