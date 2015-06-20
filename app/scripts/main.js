'use strict';

$(document).ready(function(){
	$('#languagePickerInst').selectBoxIt();
	$('.mobileNavToggle').on('click', function(){
		if($('body').hasClass('mobileNavExpend')){
			$('body').removeClass('mobileNavExpend');
		} else {
			$('body').addClass('mobileNavExpend');
		}
	});
});