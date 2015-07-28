$(document).on("pageinit","#pageone",function(){
    $(".container").on("swiperight",function(){
        $(".container").animate({left:"20%"});
    });
});

$(document).on("pageinit","#pageone",function(){
    $(".container").on("swipeleft",function(){
        $(".container").animate({left:"0"});
    });
});





///**
// * Created by TJC on 2015/7/24.
// */
//var distance,
//    touchStart,
//    touchEnd;
//
////对于touch移动距离长度的判断
//function move(e,distance,target){
//
//    e.style.left=distance+"px";
//    //如果滑动的长度大于预期的值，则元素的left为target
//    if(Math.abs(distance)>target){
//        e.style.left = target+"px";
//   //如果滑动的长度小于0，则元素的left为0
//    }else if(e.offsetLeft <= 0){
//        e.style.left = "0";
//    }
//
//}
//
////对于touchend位置的情况判断
//function animation (e,crossover,target,time){
//
//    clearInterval(e.timer);
//
//    e.timer=setInterval(function(){
//        //如果元素的left值小于临界值
//        if(e.offsetLeft<crossover){
//            e.speed = Math.ceil((e.offsetLeft-target)/3);
//            console.info(e.speed)
//            console.info("offsetLeft+"+e.offsetLeft)
//            e.style.left = e.offsetLeft-e.speed+"px";
//            if(e.offsetLeft == target){
//                clearInterval(e.timer);
//            }
//        }
//        //如果元素的left值大于临界值
//        if(e.offsetLeft>=crossover){
//            e.speed = Math.ceil((target-e.offsetLeft)/3);
//            e.style.left = e.offsetLeft+e.speed+"px";
//            if(e.offsetLeft == target){
//                clearInterval(e.timer);
//            }
//        }
//    },time)
//}
//
//window.onload=function load (){
//
//    document.addEventListener('touchstart',touch, false);
//    document.addEventListener('touchmove',touch, false);
//    document.addEventListener('touchend',touch, false);
//
//    var main = document.getElementsByClassName("main")[0];
//    var vice = document.getElementById("vice");
//
//    function touch (event){
//
//        var event = event || window.event;
//
//        switch(event.type){
//
//            case "touchstart":
//                touchStart = event.touches[0].clientX;
//                break;
//
//            case "touchmove":
//                touchMove = touchStart;
//                event.preventDefault();
//                touchMove = event.touches[0].clientX;
//                break;
//
//        }
//
//        //获取touch的距离
//        if(typeof touchMove == "undefined"){
//            touchMove = touchStart;
//        }
//        distance = (touchMove-touchStart);
//        // console.info(distance);
//
//        //移动图片
//        move(main,distance,200);
//
//        //移动图片的前半过程中，touchend
//        if(distance<50 && event.type == "touchend"){
//            animation(main,50,0,50);
//            //移动图片的后半程，touched
//        }else if(distance>=50 && event.type == "touchend"){
//            animation(main,50,200,50);
//        }
//
//    }
//
//}