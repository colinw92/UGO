/**
 * Created by 斌杰 on 2016/9/15.
 */
//渲染category列表
(function (window, undefined) {
    $(function () {
        $.ajax({
            url: "http://api.ugo.com/itemcat.php",
            type: "get",
            success: function (data) {
                //获取分类数据，转换为json对象
                var data = JSON.parse(data);

                var catList = $(".ugo_cat_list");
                //使用art-template渲染模板
                template.helper('dataSplit', function (data, index) {
                    return data.split("|")[index];
                });
                var htmlStr=template("cat_tmp",data);
                catList.html(htmlStr);
                //绑定移入事件
                $(".ugo_all_category>a").on("mouseover",function(){
                    $('.ugo_cat_list').show();
                }).on("mouseleave",function(){
                    $('.ugo_cat_list').hide();
                });
                $(".ugo_cat_list").on("mouseleave",function(){
                    $('.ugo_cat_list').hide();
                }).on("mouseover",function(){
                    $('.ugo_cat_list').show();
                });
                $(".ugo_cat_list li").on("mouseover",function(){
                    $(this).children(".ugo_cat_tab").show();
                }).on("mouseleave",function(){
                    $(this).children(".ugo_cat_tab").hide();
                })
            }
        })
    })
})(window)