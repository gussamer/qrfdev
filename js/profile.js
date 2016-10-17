/*global $*/
/*global utils*/

$(window).ready(function(){
    console.log(screen);
});

//jQuery to collapse the navbar on scroll
$(window).scroll(function(){
    if(utils.isElementInView($('#intro'),true, 50)){
        utils.setActive($('#intro'));
    }else if(utils.isElementInView($('#dossier'),true)){
        utils.setActive($('#dossier'));
    }else if(utils.isElementInView($('#victories'),true)){
        utils.setActive($('#victories'));
    }else if(utils.isElementInView($('#contact'),true)){
        utils.setActive($('#contact'));
    }
    if($(".navbar").offset().top > 50){
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    }else{
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function(){
    $('a.page-scroll').bind('click', function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({scrollTop:$($anchor.attr('href')).offset().top},1500,'easeInOutExpo');
        event.preventDefault();
    });
});

$(".profilethumb").click(function(){
  $(".profilethumb").toggleClass('thumbhover');
});

$(".profilethumb").mouseenter(function(){
  $(".profilethumb").addClass('thumbhover');
});

$(".profilethumb").mouseout(function(){
  $(".profilethumb").removeClass('thumbhover');
});
/*
$(".profilethumb").click(function(){
  $(".profilepic").show({"duration":400});
});

$(".profilepic").click(function(){
  $(".profilepic").hide({"duration":400});
});

$(".profilepic").mouseout(function(){
  $(".profilepic").hide({"duration":400});
});
*/
$(".error-shake").click(function(e){
  $(this).addClass("animated shake");
});