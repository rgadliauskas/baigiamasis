$(function () {

    var url = window.location.href;
    var hash = url.substring(url.indexOf("#") + 1);


    $('.tab').click(function () {
        var tabId = '.'+$(this).attr('tabas');

        $(tabId).show().siblings().hide();

        $(this).addClass('active').siblings().removeClass('active');

        // e.preventDefault();
    });
    $('[data-default]').click();

    if(hash){
        $('[tabas="' + hash + '"]').click();
    }

});

