<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="format-detection" content="telephone=no">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<title>成为鱼说创作者</title>
<link rel="stylesheet" type="text/css" href="css/app.css"/>
<body>
	<section class="page-loading page">
        <div class="loading-div">
		<div class="pic-loading"></div>
		<div class="p-loading">加载中<span class="ani_dot">. . .</span>
		</div>
		</div>
	</section>
	<div class="wrap" id="scene" style="transform: translate3d(0px, 0px, 0px); backface-visibility: hidden;">
        <div class="bg_logo"></div>
		<div class="sec" style="-webkit-transform: matrix(1, 0, 0, 1, 0, -2668);">
			<div class="bg">
				<div class="bg_sec bg01"></div>
				<div class="bg_sec bg02"></div>
				<div class="bg_sec bg03"></div>
				<div class="bg_sec bg04"></div>
				<div class="bg_sec bg05"></div>
			</div>
			<section class="sec01 page-1 page">
				<div class="p-null"></div>
				<div class="p1-head p-headAll opacity"></div>
                <div class="p1-center p-centerAll opacity"></div>
                <div class="p1-footer p-footerAll opacity"></div>
				<div class="p-arrowdown"></div>
			</section>
            <section class="sec02 page-2 page">
                <div class="p-null"></div>
                <div class="p2-head p-headAll opacity"></div>
                <div class="p2-center p-centerAll opacity"></div>
                <div class="p2-footer p-footerAll opacity"></div>
                <div class="p-arrowdown"></div>
            </section>
            <section class="sec03 page-3 page">
                <div class="p-null"></div>
                <div class="p3-head p-headAll opacity"></div>
                <div class="p3-center p-centerAll opacity"></div>
                <div class="p3-footer p-footerAll opacity"></div>
                <div class="p-arrowdown"></div>
            </section>
            <section class="sec04 page-4 page">
                <div class="p-null"></div>
                <div class="p4-head p-headAll opacity"></div>
                <div class="p4-center p-centerAll opacity"></div>
                <div class="p4-footer p-footerAll opacity"></div>
                <div class="p-arrowdown"></div>
            </section>
            <section class="sec05 page-5 page">
                <div class="p-wrapper">
                    <div class="opacity quote"></div>
                    <div class="opacity line"></div>
                    <div class="words">
                        <div class="opacity word1"></div>
                        <div class="opacity word2"></div>
                        <div class="opacity word3"></div>
                        <div class="opacity word4"></div>
                        <div class="opacity word5"></div>
                        <div class="opacity word6"></div>
                    </div>
                </div>
            </section>
		</div>
	</div>
<script type="text/javascript" src="../common/js/zepto.min.js"></script>
<script src="./js/app.js"></script>

<?php
    $shareTitle = '成为鱼说创作者';
    $shareDesc = '知识就是金钱，上传语音赚人民币';
    $shareLink = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $shareImgUrl = "http://$_SERVER[HTTP_HOST]/tobecp/img/icon@2x.png";
    if (strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false ) {
        require_once './../vendor/wxshare.php';
    }
?>
</body>
</html>