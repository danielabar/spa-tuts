define([
  'jquery',
  'bootstrap'
], function($) {

  'use strict';

  var contentId = 'content';

  var init = function() {
    $('body').append('<div id="' + contentId + '"></div>');
  };

  var getContentId = function() {
    return contentId;
  };

  var getTimeString = function() {
    var date = new Date();
    return [date.getHours(), ':', date.getMinutes()].join('');
  };

  var displayTime = function() {
    var html = [
      '<div class="alert alert-warning alert-dismissible fade in">',
      ' <button type="button" class="close" data-dismiss="alert">&times;</button>',
      ' The time is: ',
        getTimeString(),
      '</div>'
    ].join('');
    $('#' + contentId).html(html);
  };

  return {
    init: init,
    getContentId: getContentId,
    displayTime: displayTime
  }

});