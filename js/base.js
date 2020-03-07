//模态框
$(function () {
    $('body').on('click', '.modal [data-close]', function () {
        $(this).parents('.modal').fadeOut();
            $('body').attr("style", "height:auto;");
            $('body').attr("style", "overflow:auto;");
    });
    $('body').on('click', '.modal .modal-wrapper', function () {
        $(this).parents('.modal').fadeOut();
            $('body').attr("style", "height:auto;");
            $('body').attr("style", "overflow:auto;");
    });
    $('body').on('click', '.modal .modal-wrapper>div', function (e) {
        e.stopPropagation();
    });
    $('body').on('click', '[data-modal]', function () {
        var name = $(this).attr('data-modal');
        $(name).fadeIn();
            $('body').attr("style", "height:100%;");
            $('body').attr("style", "overflow:hidden;");
    });
});


//Tab切换
$('.tab-ul li').click(function(){
	$(this).addClass('on').siblings().removeClass('on');
	var index = $(this).index();
	$(this).next('.content .con').eq(index).addClass('active').siblings('.content .con').removeClass('active')
});





