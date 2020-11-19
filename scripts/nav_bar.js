$(document).ready(function() {

    $("#nav").mouseenter(function() {

        $("#nav").css({
            borderRadius: "20px"
        });
        $("#nav img").css({
            marginRight: "10px"
        });
        $("#nav nav").css({
            visibility: "visible",
            width: "max-content",
            height: "min-content"
        });

    });

    $("#nav").mouseleave(function() {

        $("#nav").css({
            borderRadius: "999px"
        });
        $("#nav img").css({
            marginRight: "0px"
        });
        $("#nav nav").css({
            visibility: "hidden",
            width: "0px",
            height: "0px"
        });

    });

});