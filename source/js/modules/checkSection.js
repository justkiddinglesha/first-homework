var checkSection = (function() {
	var checkFunc = function() {
		$('.articles__item').each(function(i,el) {
			var $this = $(this),
			topEdge = $this.offset().top - 300,
			bottomEdge = topEdge + $this.height(),
			wScroll = $(window).scrollTop();

			if (topEdge < wScroll && bottomEdge > wScroll) {
				var currentId = $this.data('section'),
					reqLink = $('.categories__link').filter('[href = "#' + currentId + '"]');

				reqLink.closest('.categories__item').addClass('active')
					.siblings().removeClass('active');

				window.location.hash = currentId;
			}
		});
	};
	return {
		init: function() {
			checkFunc();
		}
	}
}());