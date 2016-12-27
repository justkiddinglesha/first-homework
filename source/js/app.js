'use strict';

$(function() {
	preloader.init();
	flipper.init();
	scrollByClick.init();
	slider.init();
	fixedBlogMenu.fixedmenu();
	fixedBlogMenu.openMenu();
	showMenu.init();
});

$(window).scroll(function(){
	checkSection.init();
});