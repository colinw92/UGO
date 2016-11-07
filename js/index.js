// index tab
$(function () {
    (function () {
        $(".yg-mom-tab li:first-child").css({
            backgroundColor: "#000",
            color: "#fff"
        }).find("span").css("display", "block");
        $(".yg-mom-tab li").click(function () {
            $(".yg-mom-tab li").css({
                backgroundColor: "#fff",
                color: "#000"
            });
            $(".yg-mom-tab li span").css("display", "none");
            $(this).css({
                backgroundColor: "#000",
                color: "#fff"
            }).find("span").css("display", "block");
        });

        //
    })();
});
