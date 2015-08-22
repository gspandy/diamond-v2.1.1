/**
  *  write by ftt
  *  time 2013.08.23
  */

// ������ʾ
function pop_error(title,content,callback,hasCancel){
	var aTitle = title || '������ʾ';
	var aContent = content || '������ʾ����';
	var aCancel = hasCancel && true;

    var pop_error = art.dialog({
		title: aTitle,
		icon: 'error',
		content: aContent,
		ok: callback,
		cancel: aCancel,
		lock: true
	});
}


// �ɹ���ʾ
function pop_succeed(title, content, callback, hasCancel){
	var aTitle = title || '�ɹ���ʾ';
	var aContent = content || '�ɹ���ʾ����';
	var aCancel = hasCancel && true;
	
    var pop_succeed = art.dialog({
		title: aTitle,
		icon: 'succeed',
		content: aContent,
		ok: callback,
		cancel: aCancel,
		lock: true
	});
}


// ������ʾ
function pop_question(title,content,callback,hasCancel){
	var aTitle = title || '������ʾ';
	var aContent = content || '������ʾ����';
	var aCancel = hasCancel && true;
	
    var pop_question = art.dialog.through({
		title: aTitle,
		icon: 'question',
		content: aContent,
		ok: callback,
		cancel: aCancel,
		lock: true
	});
}


// ������ʾ
function pop_warning(title,content,hasCancel,callback){
	var aTitle = title || '������ʾ';
	var aContent = content || '������ʾ';
	var aCancel = hasCancel && true;

    var pop_warning = art.dialog({
		title: aTitle,
		icon: 'warning',
		content: aContent,
		ok: callback || function(){},
		cancel: aCancel,
		lock: true
	});
}


// ������ʾ
function pop_faceSad(){
    var pop_faceSad = art.dialog({
		title: '������ʾ',
		icon: 'face-sad',
		content: '������ʾ������ʾ������ʾ������ʾ<br>������ʾ',
		ok: function () {
			//art.dialog({content: 'ȷ��', lock: true});
			//return false;
		},
		cancel: true,
		lock: true
	});
}


// ΢Ц��ʾ
function pop_faceSmile(){
    var pop_faceSmile = art.dialog({
		title: '΢Ц��ʾ',
		icon: 'face-smile',
		content: '΢Ц��ʾ΢Ц��ʾ΢Ц��ʾ΢Ц��ʾ<br>΢Ц��ʾ',
		ok: function () {
			//art.dialog({content: 'ȷ��', lock: true});
			//return false;
		},
		cancel: true,
		lock: true
	});
}