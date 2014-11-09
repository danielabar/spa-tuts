define([
  'views/app',
  'routers/router'
], function(AppView, Router) {

  'use strict';

  var init = function() {
    var appView = initView();
    initRouter(appView);
  };

  var initView = function() {
    var appView = new AppView();
    $('body').append(appView.el)
    return appView;
  };

  var initRouter = function(view) {
    var router = new Router(view);
    Backbone.history.start();
  };

  return {
    init: init,
  }

});