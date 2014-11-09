define([
  'views/app',
  'routers/router'
], function(AppView, Router) {

  'use strict';

  var init = function() {
    var appView = new AppView();
    $('body').append(appView.el)

    var router = new Router(appView);
    Backbone.history.start();
  };

  return {
    init: init,
  }

});