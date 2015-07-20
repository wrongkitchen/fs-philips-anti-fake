'use strict';

$(document).ready(function(){
	var languageSelect = $('#languagePickerInst').selectBoxIt();
	languageSelect.on('change', function(){
		window.location.href = '../' + $(this).val();
	});
	$('.mobileNavToggle').on('click', function(){
		if($('body').hasClass('mobileNavExpend')){
			$('body').removeClass('mobileNavExpend');
		} else {
			$('body').addClass('mobileNavExpend');
		}
	});
	$('.mobileNav .p-sub-menu').eq(0).show();
	$('.mobileTitle').on('click', function(){
		$('.mobileNav .p-sub-menu').hide();
		$(this).parent().find('.p-sub-menu').show();
	});
});