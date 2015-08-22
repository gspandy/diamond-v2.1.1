/*
 * time 2011.02.23
 *
 */

(function($){
	//��չ���������jquery;
	$.fn.extend({   
		//����ѡ��ı������ݸ�����
		slideimg: function(options) {  
			
			//������Ĭ��ֵ
			var defaults = {
			   tol_class:'.goleftbtn',       //��õ����ť��class
			   tor_class:'.gorightbtn',      //��õ���Ұ�ť��class
			   slide_class:'.slide_tolr',    //��û������class
			   center_class:'.star',         //����м���class
			   imgshow_num:'1',      //���ɼ�ͼƬ��������
			   cen_dot_bar:'ture',   //��cen_dot_barΪ'ture'ʱ�м���ʾ������رգ�
			   centerbar_class:'.center_dot',              //�м�����ڲ��class
			   runtime:'3000',      //�Զ�����ʱ��
			   gostart:'gostart',	//�Զ�����
			   autoClose:'ture'   //�����Զ����У�Ĭ��Ϊ������,����Ҫ����ʱ��������Ϊfalse;
			}; 
			
			options = $.extend(defaults, options); 
			var count = 1;
			var checkname;
			
			//����ƥ��Ԫ�صļ���
			return this.each(function() {
			var o =options;
            
            //���������ID; 
			var thisid = $(this).attr("id");
			//ת����ȥ���м���class��'.'
			var cenclass =o.center_class.substr('1');
			//����м����㴦��class
            var centerBar = $($(this).find(o.centerbar_class),$(this));
			var gostart = $($(this).find(o.gostart),$(this));
			var slidebar = $($(this).find(o.slide_class),$(this));
			//��໬���Ĵ�����Math.ceil()��������ȡ����
			o.maxnum = Math.ceil($("#" + thisid + " " +  o.slide_class).children().size()/o.imgshow_num);
			domemaxnum = Math.ceil(o.maxnum/o.imgshow_num);
			//���ÿɼ���Ŀ�
			o.slide_wid = slidebar.parent().width();
			//���û�����Ŀ�
			slidebar.css("width",o.slide_wid*o.maxnum+"px");
			
			//����м䴦�ĵ����
			
			if(o.cen_dot_bar == 'ture'){
				for( var i=1;i<=o.maxnum;i++){
					$(centerBar).append(
						'<span name=" '+ (i-1) +' " class=" ' + cenclass+  '">&nbsp;</span>'
					);
				}
			};
			
			var goleftbtn = $($(this).find(o.tol_class),$(this));
			var gorightbtn = $($(this).find(o.tor_class),$(this));
			var clickCenter = $($(this).find(o.center_class),$(this));
            
			//�������ťʱ��
			$(goleftbtn).click(function(){
				if(count > 1){
				  count--;
				  com_cen_src();
				}else{
				  count = o.maxnum;
				  com_cen_src();
				}
			});
			 
			//������Ұ�ťʱ��
			$(gorightbtn).click(function(){
				clickRight();
			});
			
			function clickRight(){
			    if( count < o.maxnum){
				  count++;
				  com_cen_src();	  
				}else{
				  slidebar.animate({left:'0'},{queue:false});
				  count = 1;
				  com_cen_src();
				}
			}
            
			//����м��ʱ
			$(clickCenter).live("click",function(){     
				   count = $(this).attr("name");
				   count++;
				   com_cen_src();
			});
			
			//�����м�������͸����
			$("#" + thisid + " " + o.center_class).eq(count-1).addClass("focus").siblings().removeClass("focus");

			$(o.tol_class+" img" +","+o.tor_class+" img").css("opacity","0.8");
			$(o.tol_class+" img" +","+o.tor_class+" img").hover(function(){
				    $(this).css("opacity","1");
				},function(){
				    $(this).css("opacity","0.8");
			});
			
			//�Զ����в���start			
			$("#" + thisid).hover(function(){
				 go_stop();
				},function(){
				 go_start();
			});
			
			go_start();
			
			function go_start(){
			   if(o.autoClose === 'false'){
			       gostart = setInterval(clickRight,o.runtime);
			   }
			};
			function go_stop(){
				clearInterval(gostart);
			};
			
			//�Զ����в���end
			

			function com_cen_src(){
				slidebar.animate({left:'-' + o.slide_wid*(count-1)},{queue:false});
			    $("#" + thisid + " " + o.center_class).eq(count-1).addClass("focus").siblings().removeClass("focus");
			}
		
		    });  
		}  
	});  
})(jQuery);