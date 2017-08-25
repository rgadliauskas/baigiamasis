$(function () {
    $('.tab').click(function () {
        var tabId = $(this).attr('href');

        $(tabId).show().siblings().hide();

        $(this).addClass('active').siblings().removeClass('active');
    });

    $('[data-default]').click();
});