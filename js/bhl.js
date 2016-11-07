
//tab栏切换
//获取母婴用品的tab栏们--》lis
var baby = document.getElementById("momBaby").children;
//获取母婴用品下面要切换的ul们
var babyTab = document.getElementById("bhl-tab1").children;
//获取美妆呵护
var beauty = document.getElementById("momBaby1").children;
//获取美妆呵护下面的ul
var beautyTab = document.getElementById("bhl-tab2").children;
//获取箱包的tab们
var bag = document.getElementById("momBaby2").children;
//获取箱包下面的ul们
var bagTab = document.getElementById("bhl-tab3").children;
//获取优购优选的tab
var rate = document.getElementById("momBaby3").children;
//获取优购优选tab栏下面的ul
var rateTab = document.getElementById("bhl-tab4").children;

function init(){
    TabCut(baby,babyTab);
    TabCut(beauty,beautyTab);
    TabCut(bag,bagTab);
    TabCut(rate,rateTab);
};
init();



//tab切换函数
function TabCut(tabDoms,ulDoms){
    //循环绑定事件实现tab栏切换效果
    for(var i= 0,length=tabDoms.length;i<length;i++){
        var index,
            tab = tabDoms[i];
        //循环定义每次的lis[i]的值，匹配给index
        tab.index = i;
        //循环绑定事件，实现点击切换
        tab.addEventListener("click",function(){
            for(var j= 0,length=ulDoms.length;j<length;j++){
                //全部设置为默认样式,tab栏为白色，ul为全部隐藏
                tabDoms[j].className="";
                ulDoms[j].className="bhl-momExp clearfix";
            }
            //让当前tab栏颜色变黑
            this.className = "lix";
            //显示当前tab栏对应的ul
            ulDoms[this.index].className="bhl-momExp clearfix now";
        });
    }
}
