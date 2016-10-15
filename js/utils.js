/*global $*/
/*global utils*/
window.utils = window.utils||{};

utils.isElementInView = function(element, fullyInView, topOffset){
    if(!topOffset) topOffset=0;
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();
    if(fullyInView === true){
        return (((pageTop-topOffset) < elementTop) && (pageBottom > elementBottom));
    } else {
        return ((elementBottom <= pageBottom) && (elementTop >= (pageTop-topOffset)));
    }
};

utils.setActive = function(element){
    var inId = element[0].id;
    if(!$('#'+inId+'Nav').hasClass('active')){
        $('.navli').removeClass('active');
        $('#'+inId+'Nav').addClass('active');
    }
};