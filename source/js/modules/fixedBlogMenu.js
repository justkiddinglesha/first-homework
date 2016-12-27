var fixedBlogMenu = (function() {
	var moveMenu = function() {
		var wWidth = $(window).width();

		if (wWidth > 1199) {
			console.log(wWidth);
			var menuWidth = $('.categories').width(),
			wScroll = $(window).scrollTop(),
			offset = $('.sidebar').offset(),
			menu = $('.categories');

			if ((offset.top - 70) < wScroll) {
				menu.addClass('categories_fixed');
				menu.css({width: menuWidth, left: offset.left + 9});
			} else {
				menu.removeClass('categories_fixed');
				menu.removeAttr('style');
			}

		}
	};

	var swipeMenu = function() {
		$('.js-toggle-menu').on('click', function(e){
			$('.sidebar').toggleClass('show');
		});
	};

	return {
		fixedmenu: function() {
			if ( $('.sidebar').length ) {
				$(window).scroll(function(event) {
					moveMenu();
				});

				$(window).resize(function(event) {
					moveMenu();
				});
			}
		},

		openMenu: function(){
			if ( $('.sidebar').length ) {
				swipeMenu();
			}
		}
	}

}()); 