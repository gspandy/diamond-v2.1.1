$().ready( function() {

	if ($.tools != null) {
		var $tab = $("#tab");
		var $title = $("#inputForm :input[title], #inputForm label[title]");

		// TabЧ��
		$tab.tabs("table.tabContent, div.tabContent", {
			tabs: "input"
		});
	
		// ����ʾ
		$title.tooltip({
			position: "center right",
			offset: [0, 4],
			effect: "fade"
		});
		
	}

	// ��֤��Ϣ
	if($.validator != null) {
		$.extend($.validator.messages, {
		    required: "����",
			email: "E-mail��ʽ����",
			url: "��ַ��ʽ����",
			date: "���ڸ�ʽ����",
			dateISO: "���ڸ�ʽ����",
			pointcard: "���ÿ���ʽ����",
			number: "ֻ������������",
			digits: "ֻ�����������������",
			minlength: $.validator.format("���Ȳ�����С��{0}"),
			maxlength: $.validator.format("���Ȳ��������{0}"),
			rangelength: $.validator.format("���ȱ�����{0}-{1}֮��"),
			min: $.validator.format("������С��{0}"),
			max: $.validator.format("���������{0}"),
			range: $.validator.format("������{0}-{1}֮��"),
			accept: "�����׺����",
			equalTo: "�������벻һ��",
			remote: "�������",
			integer: "ֻ������������",
			positive: "ֻ������������",
			negative: "ֻ�������븺��",
			decimal: "��ֵ����������Χ",
			pattern: "��ʽ����",
			extension: "�ļ���ʽ����"
		});
		
		$.validator.setDefaults({
			errorClass: "fieldError",
			ignore: ".ignore",
			ignoreTitle: true,
			errorPlacement: function(error, element) {
				var fieldSet = element.closest("span.fieldSet");
				if (fieldSet.size() > 0) {
					error.appendTo(fieldSet);
				} else {
					error.insertAfter(element);
				}
			},
			submitHandler: function(form) {
				$(form).find(":submit").prop("disabled", true);
				form.submit();
			}
		});
	}

});