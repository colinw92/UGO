
//tab���л�
//��ȡĸӤ��Ʒ��tab����--��lis
var baby = document.getElementById("momBaby").children;
//��ȡĸӤ��Ʒ����Ҫ�л���ul��
var babyTab = document.getElementById("bhl-tab1").children;
//��ȡ��ױ�ǻ�
var beauty = document.getElementById("momBaby1").children;
//��ȡ��ױ�ǻ������ul
var beautyTab = document.getElementById("bhl-tab2").children;
//��ȡ�����tab��
var bag = document.getElementById("momBaby2").children;
//��ȡ��������ul��
var bagTab = document.getElementById("bhl-tab3").children;
//��ȡ�Ź���ѡ��tab
var rate = document.getElementById("momBaby3").children;
//��ȡ�Ź���ѡtab�������ul
var rateTab = document.getElementById("bhl-tab4").children;

function init(){
    TabCut(baby,babyTab);
    TabCut(beauty,beautyTab);
    TabCut(bag,bagTab);
    TabCut(rate,rateTab);
};
init();



//tab�л�����
function TabCut(tabDoms,ulDoms){
    //ѭ�����¼�ʵ��tab���л�Ч��
    for(var i= 0,length=tabDoms.length;i<length;i++){
        var index,
            tab = tabDoms[i];
        //ѭ������ÿ�ε�lis[i]��ֵ��ƥ���index
        tab.index = i;
        //ѭ�����¼���ʵ�ֵ���л�
        tab.addEventListener("click",function(){
            for(var j= 0,length=ulDoms.length;j<length;j++){
                //ȫ������ΪĬ����ʽ,tab��Ϊ��ɫ��ulΪȫ������
                tabDoms[j].className="";
                ulDoms[j].className="bhl-momExp clearfix";
            }
            //�õ�ǰtab����ɫ���
            this.className = "lix";
            //��ʾ��ǰtab����Ӧ��ul
            ulDoms[this.index].className="bhl-momExp clearfix now";
        });
    }
}
