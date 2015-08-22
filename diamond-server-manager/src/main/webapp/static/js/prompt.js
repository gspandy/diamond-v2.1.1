/*
 *  time 2013.06.29
 *  retime 2013.11.06 
 */ 
 
// ͼ����з���
function setCenter(promptComBar){
	var offX = ($(window).width()-$("."+ promptComBar).width())/2;
	var offY = ($(window).height()-$("."+ promptComBar).height())/2 + $(window).scrollTop();
	if(offY < 0){
		 offY = 10;
	}
	$("."+ promptComBar).css({
		"left":offX + "px",
		"top":offY + "px"
	});
}

// ��ʾ�ɰ巽��
function showMask(){
	var maskCon = '<div class="promptMask"></div>'
	$(maskCon).appendTo($("body"));
	$(".promptMask").css({
		"background":"#000",
		"width":"100%",
		"position":"absolute",
		"z-index":"999",
		"top":"0",
		"left":"0",
		"display":"block",
		"height":$(document).height(),
		"opacity":"0.2"
	});
}

// ������ʾ�ɰ�ʱ����
function showBar(promptComBar){
	$("."+ promptComBar).show();
	setCenter(promptComBar);
}

// ͬʱ��ʾ�ɰ�ʱ����
function showAndMask(promptComBar){
	$("."+ promptComBar).show();
	setCenter(promptComBar);
	showMask();
}

// û���ɰ�ʱ���ùر�
function closeBar(promptComBar){
	$("."+ promptComBar).hide();
}

// ���ɰ�ʱ���ùر�
function closeAndMask(promptComBar){
	$("."+ promptComBar).hide();
	$(".promptMask").remove();
}

// ��ʾ���ز㷽��
function loading(){
	var loadingCon = '<div class="loading"></div>'
	$(loadingCon).appendTo($("body"));
}

// ���ز����
function showLoading(){
	loading();
	showAndMask("loading");
}

// ���ز���ùر�
function closeLoading(){
	closeAndMask("loading");
	$(".loading").remove();
}