<?php header('content-type: text/html; charset=utf-8');?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="format-detection" content="telephone=no">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<title>不测不知道│你的手机暴露了你内心的小秘密，简直太准了！</title>
<link rel="stylesheet" type="text/css" href="css/app.css"/>
<body>
    <div class="main">
        <div class="title"></div>
        <div class="cloud"></div>
        <div class="cloud2"></div>
        <div class="turntable">
            <ul class="con">
                <li class="bg-1">
                    <img src="img/meitu.png" data-img="img/ic-meitu.png">
                </li>
                <li class="bg-2">
                    <img src="img/Uber.png" data-img="img/ic-uber.png">
                </li>
                <li class="bg-3">
                    <img src="img/fish.png" data-img="img/ic-fish.png">
                </li>
                <li class="bg-4">
                    <img src="img/know.png" data-img="img/ic-know.png">
                </li>
                <li class="bg-5" data-action="start">
                    <div></div>
                </li>
                <li class="bg-6">
                    <img src="img/taobao.png" data-img="img/ic-taobao.png">
                </li>
                <li class="bg-7">
                    <img src="img/dazhong.png" data-img="img/ic-dazhong.png">
                </li>
                <li class="bg-8">
                    <img src="img/wymusic.png" data-img="img/ic-wymusic.png">
                </li>
                <li class="bg-9">
                    <img src="img/quna.png" data-img="img/ic-quna.png">
                </li>
            </ul>
        </div>
    </div>
    <div class="result hide">
       <div class="tit">测试结果</div>
       <div class="close" data-action="close"></div>
       <div class="content-1">
            <div class="bg"></div>
            <h1>你的真爱是<span>[<span id="name"></span>]</span></h1>
            <img src="" id="img">
       </div>
       <div class="content-2" id="content">
       </div>
       <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.fishsaying.android" class="fs-btn hide">下载鱼说客户端</a>
       <a href="javascript:void(0)" class="btn btn-default" data-action="share">告诉朋友</a>
    </div>
    <div class="layer hide" data-action="close"></div>
    <div class="share hide"><img src="img/share.png" width="100%"></div></div>
    <div class="layer-2 hide" data-action="close-2"></div>
<script>
    window.pageConfig = {
        domain: {
            www: 'http://<?php echo $_SERVER["HTTP_HOST"];?>'
        }
    };
</script>
<script type="text/javascript" src="../common/js/zepto.min.js"></script>
<script type="text/javascript" src="../common/js/fastclick.js"></script>
<script type="text/javascript">
    $(function() {
      FastClick.attach(document.body);
    });
</script>
<script src="./js/app.js"></script>
<?php
    $shareTitle = '每个人的手机里都有那么几款常用的APP，可是你造吗？它悄悄滴泄露了你潜意识中的秘密，不信来测。';
    $shareDesc = '不测不知道│你的手机暴露了你内心的小秘密，简直太准了！';
    $shareLink = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $shareImgUrl = "http://$_SERVER[HTTP_HOST]/turntable/img/icon.png";
    require_once './../vendor/wxshare.php';
    // if (strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false ) {
    //     require_once './../vendor/wxshare.php';
    // }
?>
<script>
    var _title = '<?php echo $shareTitle; ?>';
    var _desc = '<?php echo $shareDesc; ?>';
    var _link = '<?php echo $shareLink; ?>';
    var _imgUrl = '<?php echo $shareImgUrl; ?>';

    var defShareData = {
        title: _title,
        desc: _desc,
        link: _link,
        imgUrl: _imgUrl
    }

    window.setWXShareData = function(data){
        data = data || {};
        data = $.extend(true, {}, defShareData, data);
        
        _title = data.title;
        _desc = data.desc;
        _link = data.link;
        _imgUrl = data.imgUrl;
        setShareData();
    }
    window.getWXShareData = function(){
        return {
            title: _title,
            desc: _desc,
            link: _link,
            imgUrl: _imgUrl
        }
    }
</script>
<?php if(strpos($_SERVER["HTTP_HOST"], 'staging') !== false) {?>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?92d3cfe7e80d2872a487e08b90fb97a9";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
<?php }else {?>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?646d7b714f79477f2a0c64f2e0045553";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
<?php }?>
</body>
</html>