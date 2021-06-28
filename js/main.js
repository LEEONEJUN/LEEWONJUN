$(document).ready(function () {
    var winHeight = $(window).height();
    var secLen = $("main section").length;
    var maxRange = winHeight * (secLen - 1);

    function moveWrapper(event) {
        var currentPos = $("#wrapper").css("top");
            currentPos = parseInt(currentPos);
        var absPos = Math.abs(currentPos);
        var animSpeed = 700;

        var direction = event
        if (direction > 0 || direction === "ArrowDown" || direction === " ") { //scrollDown or press arrowdown or press spacebar
            for(i=0; i<3; i++){
                if(absPos >= winHeight * i && absPos < winHeight * (i+1)){
                    $("#wrapper").stop().animate({
                        "top" : currentPos - winHeight
                    },animSpeed)
                }
            }
        } else if (direction < 0 || direction === "ArrowUp") { //scrollUp or press arrow-up
            for(i=0; i< secLen; i++){
                if(absPos === 0){
                    $("#wrapper").stop().animate({
                        "top" : 0
                    },animSpeed)
                } else if(absPos >= winHeight * i && absPos < winHeight * (i+1)){
                    $("#wrapper").stop().animate({
                        "top" : currentPos + winHeight
                    },animSpeed)
                } 
            }
        }
    }

    var animStatus = function () {
        return $("#wrapper").is(":animated");
    }

    $(window).on("mousewheel", function (e) {
        var d = e.originalEvent.deltaY;
        var stat = animStatus();
        if (!stat) {
            moveWrapper(d)
        }
    });

    $(window).on("keydown", function(e) {
        var keys = e.key;
        var stat = animStatus();
        if (!stat) {
            moveWrapper(keys)
        }
    });

    $(window).on("mousemove", function(e){
        var x = e.pageX;
        var y = e.pageY;

        $(".img_box .c_1").css({ 
            "transform" : `translate(${y/40}px, ${x / 40}px)`
        })
        $(".img_box .c_2").css({ 
            "transform" : `translate(${y/20 + 40}px, ${-x / 15 - 60}px)`
        })
        $(".img_box .c_3").css({ 
            "transform" : `translate(${-y/20 + 15}px, ${-x / 80}px)`
        })
    })



})