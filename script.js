$(document).ready(function () {
    $("#button").hover(function () {
        $(".container1").toggleClass("color");
    });

    $(".strawberry").on("click", function () {
        $(this).toggleClass("strawberry--active");
    });

    $(".blueberry").on("click", function () {
        $(this).toggleClass("blueberry--active");
    });

    $("#page2-berry-toggle").on("change", function () {
        var strawberriesOn = $(this).prop("checked");
        $("#page2-stage").toggleClass("page2--strawberries", strawberriesOn);
        $("#page2-stage").toggleClass("page2--blueberries", !strawberriesOn);
        $("body.page2-page").toggleClass("page2-title-blue", !strawberriesOn);
    });

    $(".page3-menu-item").on("click", function () {
        var berry = $(this).data("berry");
        $("#page3-placeholder").hide();
        $(".page3-berry-panel").hide();
        $('.page3-berry-panel[data-berry="' + berry + '"]').css("display", "flex");
    });

    $(".page4-berry").on("click", function () {
        var $b = $(this);
        if ($b.hasClass("page4-berry--pop") || $b.hasClass("page4-berry--gone")) {
            return;
        }
        $b.addClass("page4-berry--pop");
        $b.one("animationend webkitAnimationEnd", function () {
            $b.removeClass("page4-berry--pop").addClass("page4-berry--gone");
        });
    });
});