$(function(){

    //슬라이드 페이드인 효과
    let currentIndex = 0;
    $(".slide").hide().first().show();

    setInterval(function(){
        let nextIndex = (currentIndex+1) %3;
        $(".slide").eq(currentIndex).fadeOut(1200);
        $(".slide").eq(nextIndex).fadeIn(1200);
        currentIndex = nextIndex;
    },3000);


    //메뉴
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(100);
    });

    //탭메뉴
    const tabBtn = $(".info-menu > a");
    const tabCont = $(".info-cont > div");
    tabCont.hide().eq(0).show();

    tabBtn.click(function(){
        const index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });


    //팝업
    $(".popup-btn").click(function(){
        $(".popup-view").show();
    });
    $(".popup-close").click(function(){
        $(".popup-view").hide();
    });
});