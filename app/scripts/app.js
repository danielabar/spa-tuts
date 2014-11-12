define([
  'views/app',
  'models/app',
  'routers/router'
], function(AppView, AppModel, Router) {

  'use strict';

  var init = function() {
    var appView = initView();
    initRouter(appView);
  };

  var initView = function() {
    var appModel = new AppModel();
    var appView = new AppView({model: appModel});

    $('body').append(appView.render().el)
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