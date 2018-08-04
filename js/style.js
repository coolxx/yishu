$(function () {
	$('.m4-btn p').each(function(index) {
		$(this).click(function(event) {
			$('.m4-btn p').removeClass('act01').eq(index).addClass('act01');
			$('.m4-show').hide().eq(index).show()
		});
	});
})