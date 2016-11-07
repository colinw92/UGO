/**
 * Created by wys on 2016/10/13.
 */
$(function(){
    //寄货地址
    $.ajax({
        type:'get',
        url: '../UIproject/php/orderShipping.php',
        dataType: 'json',
        success: function(data){
            //console.log(data);
            var str='';
            for(var i=0;i<data.length;i++){
                str += template("templateShipping",data[i]);
            }
            $('.yg_wxs_container_shippingAddress_infoWrap').append(str);
            //第一个寄货地址添加 默认地址和编辑地址的标签
            $('.yg_wxs_container_shippingAddress_infoWrap').find('li').eq(0).append($(' <div class="yg_wxs_container_shippingAddress_info_editAddress"><a href="#">编辑地址</a></div><div class="yg_wxs_container_shippingAddress_info_defaultAddress">默认地址</div>'));
        },
        error: function(data){
            console.log(data);
        }
    });

    //商品信息
    $.ajax({
        type:'get',
        url: '../UIproject/php/orderItem.php',
        dataType: 'json',
        success: function(data){
            console.log(data);
            var str='';
            for(var i=0;i<data.length;i++){
                str += template("templateProductInfomationEachWrap",data[i]);
            }
            $('.yg_wxs_container_productInfomationContainer').append(str);
        },
        error: function(data){
            console.log(data);
        }
    });

})