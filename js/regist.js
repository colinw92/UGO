/**
 * Created by wys on 2016/10/13.
 */
$(function(){
    //判断表单验证是否成功


    $('.f_regist').click(function() {
        var flag=false;

        var $this = $(this);
        var phone = $(".f_phone").val();
        var pwd = $(".f_pwd").val();
        var rpwd = $(".r_pwd").val();
        $.ajax({
            type:'post',
            url: '../UIproject/php/regist.php',
            dataType: 'json',
            data: {
                phone: phone,
                pwd: pwd,
                rpwd: rpwd
            },
            beforeSend: function() {
                var phoneTest = /^1[0-9]{10}$/;
                if (!phoneTest.test(phone)) {
                    $('span.phonError').html("手机号码不正确").fadeIn(500).delay(2000).fadeOut(500);
                    return false;
                }
                var pwdTest = /\w{6,16}/;
                if (!pwdTest.test(pwd)) {
                    $('span.pwdError').html("密码不正确").fadeIn(500).delay(2000).fadeOut(500);
                    return false;
                }
            },
            success: function(){
                $.ajax({
                    type:'post',
                    url: '../UIproject/php/register.php',
                    dataType: 'json',
                    data: {
                        name:phone,
                        phone: phone,
                        pwd: pwd,
                        email:'12'
                    },
                    success: function(data){

                        $(".f_regist").val(data.msg);
                        setTimeout(function(){
                            window.location.href="login.html";
                        },2000)
                    },
                    error: function(data){
                        console.log(data);
                        $(".f_regist").val(data.msg);
                    }
                });
            },
            error: function(data){
                //console.log(data);
                $(".f_regist").val(data.msg);
            }
        });




    });


    //$('.f_click').click(function() {
    //    var telNum = $(".f_phone").val();
    //    var phone = $(".f_phone").val();
    //    var pwd = $(".f_pwd").val();
    //    var rpwd = $(".r_pwd").val();
    //    var $btn = $(this);
    //    $.ajax({
    //        type: "post",
    //        url: "test.php",
    //        dataType: "json",
    //        data: {
    //            phone: phone,
    //            pwd: pwd,
    //            rpwd: rpwd
    //        },
    //        beforeSend: function() {
    //            if (!/^1\d{10}$/.test(telNum)) {
    //                $('span.phonError').html("手机号码不正确").fadeIn(500).delay(2000).fadeOut(500);
    //                return false;
    //            }
    //            if ($btn.hasClass("disabled")) return false;
    //            $btn.addClass("disabled").html("正在发送中...");
    //        },
    //        success: function(data){
    //            var time = parseInt(data.time) || 60;
    //            var timer = setInterval(function(){
    //                if( time == 1 ){
    //                    $btn.removeClass('disabled').html("获取验证码");
    //                    clearInterval(timer);
    //                    return false;
    //                }
    //                time--;
    //                $btn.html(time+"s后获取验证码");
    //            },1000)
    //        }
    //    });
    //})
})