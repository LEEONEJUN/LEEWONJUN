$(document).ready(function () {
    $(window).on("scroll", function () {
        var scr = $(this).scrollTop();
        $(".banner img").css({
            "transform": `translate(-50%, ${scr / 2}px)`
        })

    });

    $(window).on("scroll", function () {
        var scr = $(this).scrollTop();
        $(".sub_banner h2").css({
            "transform": `translate(50%, ${scr / -5}px)`
        })

    });


    $("nav .nav_track").slick({
        variableWidth: true,
        slidesToShow: 5,
        centerPadding: 0,
        arrows: false,
        centerMode: true
    });



    $("nav .nav_track li").on("click", function () {
        $(this).toggleClass("flip").siblings().removeClass("flip");
        var currentIdx = $(this).attr("data-slick-index");
        $("nav .nav_track").slick('slickGoTo', currentIdx, false);
    }) //slick focusing

    $("nav a").on("click", function (e) {
        e.preventDefault();
    })

    //indicator animation

    function setIndicator(i) {
        var winWidth = $(window).width();
        var wrapperWidth = $(".wrapper").width();

        var initW = $(".nav_gnb li").eq(i).width();
        var initH = $(".nav_gnb li").eq(i).height();
        var initPos = $(".nav_gnb li").eq(i).offset().left - (winWidth - wrapperWidth) / 2;

        $(".menu-navigation .indicator").css({
            "width": initW,
            "height": initH,
            "left": initPos
        })
    }

    $("nav .menu-navigation .nav_gnb li").on("click", function () {
        var i = $(this).attr("data-focus-index"); //for slick
        $("nav .nav_track").slick('slickGoTo', i, false);

        var winWidth = $(window).width();
        var wrapperWidth = $(".wrapper").width();

        var w = $(this).width();
        var h = $(this).height();
        var pos = $(this).offset().left - (winWidth - wrapperWidth) / 2;

        var slide = $("nav .indicator").is(":animated");
        $(this).addClass("on").siblings().removeClass("on");

        if (!slide) {
            $("nav .indicator").stop().animate({
                "width": w,
                "height": h,
                "left": pos
            }, 600, "easeInOutQuint")
        }
    }); //easeInOutQuint

    setIndicator(0);
    $(window).on("resize", function() {
        var idx = $(".menu-navigation .nav_gnb li.on").index();
        setIndicator(idx);
    })




})