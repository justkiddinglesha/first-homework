var scrollByClick = (function() {

	var init = function() {
		setUpListeners();
	};

	var setUpListeners = function() {
		$('.arrow-down__link').on('click', scrollToBottom);
		$('.arrow-up__link').on('click', scrollToTop);
	};

	var scrollToBottom = function(e) {
		e.preventDefault();

		var headerHeight = $('.header').height();
		$('body').animate({scrollTop: headerHeight}, 1000);
	};

	var scrollToTop = function(e) {
		e.preventDefault();

		$('body').animate({scrollTop: 0}, 1000);
	};
	
	return {
		init: init
	};

}());