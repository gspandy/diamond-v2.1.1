/**
  *  write by ftt
  *  time 2013.08.23
  */

var setting = {
	check: {
		enable: true
	},
	data: {
		simpleData: {
			enable: true
		}
	}
};
var zNodes =[
	{ name:"���ڵ�1 - չ��", open:true,
		children: [
			{ name:"���ڵ�11 - �۵�",
				children: [
					{ name:"Ҷ�ӽڵ�111"},
					{ name:"Ҷ�ӽڵ�112"},
					{ name:"Ҷ�ӽڵ�113"},
					{ name:"Ҷ�ӽڵ�114"}
				]},
			{ name:"���ڵ�12 - �۵�",
				children: [
					{ name:"Ҷ�ӽڵ�121"},
					{ name:"Ҷ�ӽڵ�122"},
					{ name:"Ҷ�ӽڵ�123"},
					{ name:"Ҷ�ӽڵ�124"}
				]},
			{ name:"���ڵ�13 - û���ӽڵ�", isParent:true}
		]},
	{ name:"���ڵ�2 - �۵�",
		children: [
			{ name:"���ڵ�21 - չ��", open:true,
				children: [
					{ name:"Ҷ�ӽڵ�211"},
					{ name:"Ҷ�ӽڵ�212"},
					{ name:"Ҷ�ӽڵ�213"},
					{ name:"Ҷ�ӽڵ�214"}
				]},
			{ name:"���ڵ�22 - �۵�",
				children: [
					{ name:"Ҷ�ӽڵ�221",
						children: [
							{ name:"Ҷ�ӽڵ�311"},
							{ name:"Ҷ�ӽڵ�312"},
							{ name:"Ҷ�ӽڵ�313"},
							{ name:"Ҷ�ӽڵ�314"}
						]},
					{ name:"Ҷ�ӽڵ�222"},
					{ name:"Ҷ�ӽڵ�223"},
					{ name:"Ҷ�ӽڵ�224"}
				]},
			{ name:"���ڵ�23 - �۵�",
				children: [
					{ name:"Ҷ�ӽڵ�231"},
					{ name:"Ҷ�ӽڵ�232"},
					{ name:"Ҷ�ӽڵ�233"},
					{ name:"Ҷ�ӽڵ�234"}
				]}
		]},
	{ name:"���ڵ�3 - û���ӽڵ�", isParent:true}

];

var code;
		
function setCheck() {
	var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
	py = $("#py").attr("checked")? "p":"",
	sy = $("#sy").attr("checked")? "s":"",
	pn = $("#pn").attr("checked")? "p":"",
	sn = $("#sn").attr("checked")? "s":"",
	type = { "Y":py + sy, "N":pn + sn};
	zTree.setting.check.chkboxType = type;
	showCode('setting.check.chkboxType = { "Y" : "' + type.Y + '", "N" : "' + type.N + '" };');
}
function showCode(str) {
	if (!code) code = $("#code");
	code.empty();
	code.append("<li>"+str+"</li>");
}

$(document).ready(function(){
	$.fn.zTree.init($("#treeDemo"), setting, zNodes);
	setCheck();
	$("#py").bind("change", setCheck);
	$("#sy").bind("change", setCheck);
	$("#pn").bind("change", setCheck);
	$("#sn").bind("change", setCheck);
});