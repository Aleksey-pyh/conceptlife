$('.insta_slider').slick({
    arrows: true,
    dots: true,//не отключать, сломается счётчик слайдов.
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.arrow .prev'),
    nextArrow: $('.arrow .next'),
});
let countChange = function () {
    let dotsLabel = "";
    dotsLabel += $('.insta_slider .slick-dots .slick-active button').attr('aria-label');//Получаем атрибут у дотсов
    dotsLabel = dotsLabel.split(' of ');//Разбиваем. Получаем первый элемент массива это число текущего слайда. Второй - общее
    $('.count .current').text(dotsLabel[0]);
    if (parseInt($('.count  .all').text()) != dotsLabel[1]) {
        $('.count  .all').text(dotsLabel[1]);
    }
}
$(document).ready(function () {
    countChange();
    $('.insta_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        countChange();
    });
})
//Скрипты для панельных фасадов
let changeActive = function (active) {
    $('.slider_nav-item').each(function () {
        $(this).removeClass('active');
    })
    $(active).addClass('active');
    $('.slider_for').slick('slickGoTo', $(active).index());
}
$('.slider_nav-item').on('click', function () {
    changeActive($(this));
})
$('.slider_for').slick({
    arrows: false,
    dots: false,
    // speed: 500,
    // fade: true,
    // cssEase: 'linear'
});
$(document).ready(function () {
    $('.slider_for').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        changeActive($('.slider_nav-item')[currentSlide]);
    });
    if ((document.body.clientHeight - document.documentElement.clientHeight) <= 0) {
        $('footer').addClass('active');
    } else {
        $('.slider_for-hiddenTech').each(function () {
            $(this).addClass('activeHid');
        })
        $('.slider_for-hiddenTech-head').each(function () {
            $(this).on('click', function () {
                let parent = $(this).parent('.slider_for-hiddenTech');
                if ($(parent).hasClass('active')) { 
                    $(parent).removeClass('active');
                    $(parent).css('transform','translateY(0)');
                    console.log($(parent).css('transform'));
                } else {
                    $(parent).css('transform','translateY(-' + (parseInt($(parent).children('.slider_for-hiddenTech-body').height()) + 40) + 'px)');
                    console.log($(parent).css('transform'));
                    $(parent).addClass('active');
                }
            })
        })
    }
})
