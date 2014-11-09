define([
  'views/app'
], function(AppView) {

  'use strict';


  var init = function() {
    var appView = new AppView();
    $('body').append(appView.el)
  };

  return {
    init: init,
  }

});