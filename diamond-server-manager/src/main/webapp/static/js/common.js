/**
  *  write by ftt
  *  time 2013.08.19
  */

$(function(){
	// iframe�߶�
	$(".adminIframe").css({"height": $(document).height() + "px"});
	
	// ���߶�
	$(".con_left").css({"height": window.screen.availHeight - 116 + "px"});
	$(".slideFrame_btn").css({"top": (document.body.offsetHeight / 2) - 102 + "px"});
	
	// ������������ʾ����
	$(".sub_nav > li > a").toggle(function(){
		$(this).parent().addClass("cur");
		$(this).parent().find("ul_sub_nav_down_menu").hide(300);
	},function(){
		$(this).parent().removeClass("cur");
		$(this).parent().find("ul_sub_nav_down_menu").show(300);
	});
	$(".sub_nav > li > a").eq(0).click();
	
	// �������������
	$(".ul_sub_nav_down_menu li a").click(function(){
		$(this).closest(".sub_nav").find("a").removeClass("focus");
		$(this).addClass("focus");
	});
	$(".ul_sub_nav_down_menu li a").eq(0).click();
	
	// �Ҳ���������ʾ����
	$(".btn_box_tab").toggle(function(){
		$(window.parent.rightMainFrame.document).find(".con_search").slideUp(200);
	},function(){
		$(window.parent.rightMainFrame.document).find(".con_search").slideDown(200);
	});
	
	// input����
	$('.auto_hint').bind("focus", function(){
          if($(this).val() == $(this).attr('realValue')) {
               $(this).val('');
               $(this).removeClass('auto_hint');
          }
     });
	 $('.auto_hint').bind("blur", function(){
          if($(this).val() == '' &&$(this).attr('realValue') != '') {
               $(this).val($(this).attr('realValue'));
               $(this).addClass('auto_hint');
          }
     });
     $('.auto_hint').each(function() {
          if($(this).attr('realValue') == '') {return;}
          if($(this).val() == '') {
               $(this).val($(this).attr('realValue'));
          }else {
               $(this).removeClass('auto_hint');
          }
     });
	
	// table�۵�չ��
	$(".unfold_ico_down").click(function(){
		var tr = $(this).closest("tr");
		if(tr.hasClass("alreadyHide")) {
			$(this).attr("class","unfold_ico_down");
			$("tr[data="+tr.attr("data")+"][class!='tr']").show();
			tr.removeClass("alreadyHide");
		} else {
			$(this).attr("class","unfold_ico_up");
			$("tr[data="+tr.attr("data")+"][class!='tr']").hide();
			tr.addClass("alreadyHide");
		}		
	});
	$(".unfold_ico_down").click();

	// table��꾭��
	$('.table_list').delegate("td", "mouseover",function(){
		$(this).parent().addClass("hover");
	}).delegate("td", "mouseout", function(){
		$(this).parent().removeClass("hover");
	});
	
	// ɾ����ǩ / ɾ��ͼƬ
	$(".c_tags span a, .c_picShow span a").bind("click", function(){
		$(this).parents("span").remove();
	});
	
	// ɾ������
	$(".pop_area_list dd").last().addClass("noBorder");
	$(".pop_area_list dd a").bind("click", function(){
		$(this).parents("dd").remove();
		$(".pop_area_list dd").last().addClass("noBorder");
	});
	
	// ������ɫѡ��
	$(".colorText").bind("click", function(){
		$(this).addClass("colorTextFocus").siblings().removeClass("colorTextFocus");
	});
	
	// �̻�����-�༭ͼƬ
	$(".merchant_pic").hover(function(){
		$(".merchant_pic").find(".btn").show();
	},function(){
		$(".merchant_pic").find(".btn").hide();
	});
	
	// Ӫ����-ͼƬģʽ
	$(".marketing_content_upload_show").hover(function(){
		$(this).find(".btn_con").show();
	},function(){
		$(this).find(".btn_con").hide();
	});
	
	// ɾ��_MP3
	$(".upload_mp3_show .btn_delete").bind("click", function(){
		$(this).parents(".mp3_list").remove();
	});
	
	// ɾ��_��ע��ص�
	$(".markLocation_text a").bind("click", function(){
		$(this).parents(".markLocation_text").hide();
	});
	
	// DD-Box��ҳ�������
	$('.upload_pic_mod').delegate(".upload_pic_show", "mouseover",function(){
		$(this).find(".btn_con").show();
	}).delegate(".upload_pic_show", "mouseout", function(){
		$(this).find(".btn_con").hide();
	});
	
	// ��ӷ�������
	$('.add_list_table').delegate('.btn_addFeedbackType', 'click',function(){
		$(this).parents('.add_list_table').find('.addFeedbackType_con').append('<div class="addFeedbackType_mod">' +
                        	'<a class="close" href="javascript:void(0);">�ر�</a>' +
                        	'<ul class="pop_list">' +
                                '<li class="clearfix"><span class="tit">ѡ�����ƣ�</span><input class="c_input_text" type="text" style="width:128px;">&nbsp;<span class="in_num_text">0/10</span></li>' +
                                '<li class="clearfix"><span class="tit">ͶƱ������</span><input class="c_input_text" type="text"></li>' +
                                '<li class="clearfix"><span class="tit">������Χ��</span><input class="c_input_text" type="text"> &sim; <input class="c_input_text" type="text"></li>' +
                                '<li class="clearfix pic_show"><span class="tit">ͼƬ��</span>' +
                                	'<span class="upload_icon_show">' +
                                        '<a class="btn_upload_add c_files_upload" href="javascript:void(0);"><input type="file" class="files"/></a>' +
                                    '</span>' +
                                    '<span class="in_num_text">ͼƬ�ߴ�Ϊ��109*130��ͼƬ��ʽJPG��PNG</span>' +
                                '</li>' +
                                '<li class="clearfix"><span class="tit">������ʾ��</span><input class="c_input_text" type="text" style="width:248px;"><span class="in_num_text">0/50  �����û����ͶƱ�ɹ�����ʾ����ʾ��</span></li>' +
                            '</ul>' +
                        '</div>');
	});
	$('.addFeedbackType_con').delegate('.close', 'click',function(){
		$(this).parents('.addFeedbackType_mod').remove();
	});
	$('.addFeedbackType_con').delegate('.upload_icon_show', 'mouseover',function(){
		$(this).find('.btn').show();
	}).delegate('.upload_icon_show', 'mouseout', function(){
		$(this).find('.btn').hide();
	});
	
	// ��������-����������Ϣ
	$('.car_table').delegate('.edit .ico', 'click',function(){
		if( $(this).hasClass("ico_cur") ){
			$(this).removeClass("ico_cur");
		}else{
			$(this).addClass("ico_cur");
		}
	});
	
	// ͳ�Ʒ���-�̻�������־
	$('.operation_links').delegate('a', 'click',function(){
		$(this).addClass("cur").siblings().removeClass("cur");
	});
});

// ����ر������
function switchBar(obj){
	if(parent.document.getElementById("framesetContains").cols == "210,*"){
		parent.document.getElementById("framesetContains").cols="10,*";
		$(".con_left").css({"margin-left":"10px"});
	}else{
		parent.document.getElementById('framesetContains').cols = "210,*";
		$(".con_left").css({"margin-left":"0"});
	}
}