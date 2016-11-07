/**
 * Created by zhouqin on 2016/9/14.
 */
(function (w) {
    $(function () {
        $tabP = $('.login_sel p');
        $tabP.eq(0).css({
            backgroundColor: "#f0eded",
            boxShadow: "-4px 0 4px #D1D0D0 inset"
        });
        $tabP.click(function () {

            if( $(this).hasClass("p1") ){
                $('.login_sel p').css({
                    backgroundColor: "#f0eded",
                    boxShadow: "4px 0 4px #D1D0D0 inset"
                });
            }else {
                $('.login_sel p').css({
                    backgroundColor: "#f0eded",
                    boxShadow: "-4px 0 4px #D1D0D0 inset"
                });
            }

            $(this).css({
                backgroundColor: "#fff",
                boxShadow: "none"
            });
            $(this).addClass('active').siblings('p').removeClass('active');
            var index = $(this).index();
            //addClass('selected')
            $('.login_l-r>div').eq(index+1).removeClass("selected").siblings().addClass("selected");
        });

        //验证表单
        var $tip = $('.tips');

        $('.btn').on('click', function () {

            var username = $('#name').val();
            var password= $("#password").val();
            if(!username && !password){
                $tip.html('请输入用户名和密码').fadeIn(300).delay(1500).fadeOut(500);
                return false;
            };
            if(username && !password){
                $tip.html('请输入密码').fadeIn(300).delay(1500).fadeOut(500);
                return false;
            };
            if(!username && password){
                $tip.html('请输入用户名').fadeIn(300).delay(1500).fadeOut(500);
                return false;
            };
            console.log(username);
            if(username && password){
                $.ajax({
                    type:'post',
                    url: '../UIproject/php/login.php',
                    dataType: 'json',
                    data:{name:username,pwd:password},
                    success: function(data) {
                        //var oData=JSON.parse(data);
                        if(data.code == 1){
                            //$tip.html('登录成功').fadeIn(300).delay(1500).fadeOut(500);
                            window.location.href="index.html";
                        }else if(data.code == -1 || data.code == 0){
                            $tip.html(data.msg).fadeIn(300).delay(1500).fadeOut(500,function(){
                                $('#name').val('');
                                $('#password').val('');
                            });
                        }
                    }
                });

            }

        })
    })
})(window)