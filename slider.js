$(document).ready(function(){
	$('.img-link').on('click',function(e){
		e.preventDefault();
		var 
			$this = $(this),
			$container = $this.closest('.slider'),
			$display = $container.find('.main-image'),
			$item = $this.closest('.list-item'),
			$path = $this.attr('href'),
			$timer = 500,
			$preload = $('.preloader');

	if (!$item.hasClass('active')){
		$preload.show();

		$display.fadeOut($timer,function(){
			$(this).attr('src', $path).on('load',function(){
				$preload.hide();
				$(this).fadeIn($timer);
			});
		});
	}

		$item.addClass('active')
		.siblings()
		.removeClass('active');
	})

	 $('.bxslider').bxSlider();

})
