/*$('.selector').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(elem, offset, direction, coords, scrollRatio, thisTop, winPos){

        /* your code in here

    },
    scrollingToTheTop : function(elem, offset, direction, coords, scrollRatio, thisTop, winPos){

        /* your code in here

    },
    scrollingOutOfView : function(elem, offset, direction, coords, scrollRatio, thisTop, winPos){

        /* your code in here

    },
    scrolledOutOfView : function(elem, offset, direction, coords, scrollRatio, thisTop, winPos){

        /* your code in here

    }
});*/

/**
 * This was built using the scrollie jQuery Plugin
 * https://github.com/Funsella/jquery-scrollie
 */

$(function() {
   $(window).keypress(function(e) {
       var key = e.which;
       console.log(key);
       //do stuff with "key" here...
   });
});


$( window ).ready(function() {
  
    var wHeight = $(window).height();

    $('.section')
      .height(wHeight)
      .scrollie({
        scrollOffset : -50,
        scrollingInView : function(elem) {
          var inId = elem.context.id;
          if(!$('#'+inId+'Nav').hasClass('active')){
            $('.navli').removeClass('active');
            $('#'+inId+'Nav').addClass('active');
          }
        }
      });
  });

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(".profilethumb").click(function(){
  $(".profilepic").show();
});

$(".profilepic").mouseout(function(){
  $(".profilepic").hide();
});

$(".error-shake").click(function(e){
  $(this).addClass("animated shake");
});
