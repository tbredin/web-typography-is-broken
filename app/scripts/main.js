
(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          }

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

              timeout = setTimeout(delayed, threshold || 100);
          };
      };
      // smartresize
      jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

    })(jQuery,'smartresize');


$(function() {
    'use strict';

    // touch
    var isTouchDevice = $('.touch').length > 0;

    // breakpoints
    // IMPORTANT: don't forget to update if css changes!
    // var break1 = "screen and (min-width: 47.9375em)";
    // var break2 = "screen and (min-width: 80em)";

    var $window = $(window);
    var $body = $('body');
    var $html = $('html');
    var $scrollTarget = $('html, body');
    var $toNextFrame = $('.js-next-frame');
    var $backToTop = $('.js-top');
    var $page = $('.page');


    // selectors to frame inside window height (default = below breakpoint)
    var $framedItems = $('.frame');

    // frame height at current window size
    var totalFramedIndex = $framedItems.length;
    var currentFramedPos = 0;
    var lastPos = 0;
    var navOpen = false;
    var scrollY,
        navHeight,
        baseSize,
        frameHeight,
        framedIndex;

    // scrolljacking
    $('.container').fullpage({
        sectionSelector: '.frame',
        easing: 'easeInOutQuart'
    });


    // // get base font size of html - will be rems
    // function getBaseSize() {
    //     baseSize = $html.css('font-size');
    // }

    // // calculate nearest whole rem unit from a pixel value (rounding up)
    // function getRem(px) {
    //     return parseInt(px) / parseInt(baseSize);
    // };

    // // height of full screen frames
    // function getFrameHeight(frame) {
    //     return frame.find('.contained').outerHeight();
    // }

    // function getScrollY() {
    //     scrollY = $window.scrollTop();
    // };

    $toNextFrame.on('click', function() {
        $.fn.fullpage.moveSectionDown();
    });

    // scroll to an element
    function scrollToElement(element) {
        element.velocity("scroll", {
            duration: 750,
            easing: "easeInOutCubic",
            verticalCentered: true
        });
    };

});


