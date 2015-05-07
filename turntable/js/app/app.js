//图片预加载
function preloader(images, cb){
    var img = new Image(),
        i = 0;
    function load(){
        //加载完播放页面
        if(i == images.length) {
            cb && cb();
            return;
        }
        img.onload=function(){
            i++;
            setTimeout(load,10);
        }
       img.src = images[i];    
    }
    load();
}
var onImgLoaded = function(){

}
//进行预加载
preloader(['img/ic-meitu.png','img/ic-uber.png','img/ic-fish.png','img/ic-know.png','img/ic-taobao.png','img/ic-dazhong.png','img/ic-quna.png','img/ic-wymusic.png','img/light.png'], onImgLoaded);

$(function(){
    //return touch
    document.body.addEventListener("touchmove", function(){return false;}, false);
})

var scrolling = false;//是否在转

$(document).on('click', '[data-action]', function(e){
    var $this = $(this),
        action = $this.data('action');
    switch(action){
        case 'start':
            if(scrolling==true) return;
            setWho();
            var speed = Math.floor(Math.random()*150) + 200;//350-200的范围
            scrolling = true;
            goScroll(0,  speed, 0.8);
            break;
        case 'close':
            $('.result').hide();
            $('.layer').hide();
            $('.fs-btn').hide();
            $('.btn').addClass('btn-default');
            break;
        case 'share':
            $('.layer-2').show();
            $('.share').show();
            break;
        case 'close-2':
            $('.layer-2').hide();
            $('.share').hide();
            break;
    }
});

var turnOrder = ['bg-3','bg-6','bg-9','bg-8','bg-7','bg-4','bg-1','bg-2'];
var turnDom = [];
for(var i = 0;i < turnOrder.length; i++){
    turnDom.push($('.'+turnOrder[i]));
}
var who;
function setWho(){
    who = Math.floor(Math.random()*9);
    if(who == 8) who = 0;
}

function goScroll(i, speed, mul){
    if(speed < 30) mul = 1.1;
    if(i==8)  i = 0;
    turnDom[i].addClass('active');
    if(speed > 350 && who==i) {//结束
        turnDom[i].addClass('active');
        scrolling = false;
        openResult(i);
        return;
    }
    setTimeout(function(){
                    turnDom[i].removeClass('active');
                    i++;
                    speed = speed * mul;
                    goScroll(i, speed, mul);
              },speed);
}

function openResult(index){
    var data = dataResult[index];
    if(index==0) {
        $('.fs-btn').show();
        $('.btn').removeClass('btn-default');
    }
    $('#name').html(data.title);
    $('#content').html(data.con);
    $('#img').attr('src', turnDom[index].find('img').attr('data-img'));
    setTimeout(function(){
        $('.result').show();
        $('.layer').show();
    },1000);

    setWXShareData({
        desc: data.shareDesc,
        imgUrl: data.shareImg
    });
}

var dataResult = [
    {
        shareDesc: "我翻了鱼说的牌，五一节，该洗洗耳朵了",
        shareImg: pageConfig.domain.www + '/turntable/img/ic-fish.png',
        title:"鱼说",
        con: "其实你是一个有故事的人。边走边爱人山人海，拿着车票微笑着等待。旅行的意义就是，堵车让身体在地狱，美景让眼睛在天堂，鱼说让耳朵在八卦。"
    },
    {
        shareDesc: "我翻了手机淘宝的牌，五一节，该手贱一下了",
        shareImg: pageConfig.domain.www + '/turntable/img/ic-taobao.png',
        title:"手机淘宝",
        con: "抽到这张牌我还能说什么呢？也许你需要一个王思聪（太太团轻拍），或者一把菜刀（剁手这事都说了多少年了……）。五一劳动节，如果你决定辛苦一把，首先劳动起来的，一定是你的手。"
    },
    {
        shareDesc: "我翻了去哪儿的牌，五一节，该说走就走了",
        shareImg: pageConfig.domain.www + '/turntable/img/ic-quna.png',
        title:"去哪儿",
        con: "既然选中这个项，送你十个字吧~~世界那么大，你想去看看。世界上最可怕的有三种人，冬天里可以唰得一下爬起来的；说戒就戒掉烟的人；五一小长假还敢出门旅游看尽人山人海的人。"
    },
    {
        shareDesc: "我翻了网易音乐的牌，五一节，宅家听音乐吧",
        shareImg: pageConfig.domain.www + '/turntable/img/ic-wymusic.png',
        title: "网易云音乐",
        con: "你是一个喜欢静静的人。音乐可以带你去到回忆也可以带你去向未来。喜欢音乐的人，脑洞都有点大。问题来了：静静是谁？其实呢，小长假与其出门造堵，不如在家听歌看书睡觉。"
    },
    {
        shareDesc: "我翻了大众点评的牌，五一节，该海吃海喝了",
        shareImg: pageConfig.domain.www + '/turntable/img/ic-dazhong.png',
        title: "大众点评",
        con: "原来你根本就是一个纯粹的吃货！十个网友九个用大众点评是为了“找吃的”，剩下的那个正在吃。吃货才是这个世界上最可爱的群体之一。五一小长假，还不赶紧把平时没来得及去吃的补上。"
    },
    {
        shareDesc: "我翻了知乎的牌，五一节，与大神一起战斗吧",
        shareImg: pageConfig.domain.www + '/turntable/img/ic-know.png',
        title: "知乎",
        con: "原来你是个求知欲强的人，佩服佩服。在知乎，甭管是论文写不出来，原子弹怎么造……你都可以找到答案。有没有想过趁五一去学点陶艺，或者学着做一道新菜，然后就等着网友提问了。"
    },
    {
        shareDesc: "我翻了美图秀秀的牌，五一节，该秀自拍了",
        shareImg: pageConfig.domain.www + '/turntable/img/ic-meitu.png',
        title: "美图秀秀",
        con: "恭喜成为7.4亿用户一员。这是个看脸的世界，“别人家的英语老师”“民国穿越来的清纯少女”，各种颜值爆表。基础不好也别绝望，美图秀秀挺你！五一出去嗨，你只能对它不离不弃。"
    },
    {
        shareDesc: "我翻了uber的牌，五一节，是该装逼了",
        shareImg: pageConfig.domain.www + '/turntable/img/ic-uber.png',
        title: "Uber",
        con: "开出这个结果，30%的几率是一个装逼范儿，70%的几率是一个脸控。但我觉得你就是想看帅哥。这个五一，叫上uber，也许就找到人生另一半了呢？"
    }
];