var slider = (function() {
    var counter = 0,
        duration = 300,
        sliderPreviewContainer = $('.slider__current-item'),
        sliderInfoContainer = $('.info'),
        flag = true;


    var moveSlide = function(container, direction) {
        var items = container.find('.slider__item'),
            activeItem = items.filter('.active'),
            animDirection = direction == 'down' ? 100 : -100;

        if (counter >= items.length) {
            counter = 0;
        }

        if (counter == -1) {
            counter = 2;
        }



        var requeItem = items.eq(counter);


        activeItem.animate({
            'top': animDirection + '%'
        }, duration);

        requeItem.animate({
            'top': '0'
        }, duration, function () {
            activeItem.removeClass('active').css('top', -animDirection + '%');
            $(this).addClass('active');
            flag = true;
        });
    };

    var moveSlidePreview = function() {
        var items = sliderPreviewContainer.find('.current-list__item'),
            activeItem = items.filter('.active'),
            requeItem = items.eq(counter);

        activeItem.animate({
            'left': '-200%'
        }, duration);

        requeItem.animate({
            'left': '0'
        }, duration, function() {
            activeItem.removeClass('active').css('left', '100%');
            $(this).addClass('active');
        })
    };

    var moveSlideinfo = function() {
      var activeContainer;

        sliderInfoContainer.each(
            function(index) {
                if ($(this).css('display') !== 'none') {
                    activeContainer = $(this);
                }
            }
        );


        var items =  activeContainer.find('.info__item'),
          activeItem = items.filter('.active'),
          requeItem = items.eq(counter);



        activeItem.animate({
            'left': '-150%'
        }, duration);

        requeItem.animate({
            'left': '0'
        }, duration, function () {
            activeItem.removeClass('active').css('left', '150%');
            $(this).addClass('active');
        })
    };

    var activateSlider = function(container, direction) {
        $(container).on('click', function (e) {
            e.preventDefault();

            if(flag == true) {
                flag = false;
                if (direction == 'down') {
                    counter--;
                    moveSlide($(this).siblings('.js-slider-up'), 'up');
                    moveSlide($(this), direction);
                    moveSlidePreview();
                    moveSlideinfo();
                }else {
                    counter++;
                    moveSlide($(this).siblings('.js-slider-down'), 'down');
                    moveSlide($(this), direction);
                    moveSlidePreview();
                    moveSlideinfo();
                }
            }
        })
    };

    return {
        init: function() {
            activateSlider('.js-slider-down', 'down');
            activateSlider('.js-slider-up', 'up');
        }
    }
}());