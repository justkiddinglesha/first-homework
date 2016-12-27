var flipper = (function() {
	var flipFunc = function() {
		$('.welcome__login-link').on('click', function(e) {
			e.preventDefault();
			$('#flip-toggle').toggleClass('hover');
		})
		$('.main-link').on('click', function(e) {
			e.preventDefault();
			$('#flip-toggle').toggleClass('hover');
		})
	};
	return {
        init: function() {
            flipFunc();
        }
    }
}());