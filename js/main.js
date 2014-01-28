$(document).ready(function(){
	$('.close').on('click',function(){
		$('.main').css('bottom','-10em',function(){
			this.hide();
		});
	});
});