


(function ($) {
  "use strict";
  $('select').niceSelect();

  /*
    ------------------------  
    08. Portfolio Popup
    --------------------------
    */
  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade'
  });

  $('.test-popup-link').magnificPopup({
    type: 'image'
    // other options
  });

 

}(jQuery));