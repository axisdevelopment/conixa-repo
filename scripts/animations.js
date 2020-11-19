$(document).ready(function() {

    var asset_1_Top = $("#anim-asset-1").offset().top;
    var asset_1_Bottom = $("#anim-asset-1").offset().top + $("#anim-asset-1").outerHeight();

    $(window).scroll(function() {

        var viewportTop = $(window).scrollTop();
        var viewportBottom = $(window).scrollTop() + $(window).innerHeight();

        if (viewportBottom > asset_1_Top && viewportTop < asset_1_Bottom) {
            $("#anim-asset-1").addClass('magictime puffIn');
        }

    });

});