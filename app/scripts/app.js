define([
  'views/app',
  'models/app',
  'routers/router',
  'jquery'
], function(AppView, AppModel, Router, $) {

  'use strict';

  var init = function() {
    var appView = initView();
    initRouter(appView);
  };

  var initView = function() {
    var appModel = new AppModel({id: 1});
    var appView = new AppView({model: appModel});
    $('body').append(appView.render().el);
    appModel.fetch();
    return appView;
  };

  var initRouter = function(view) {
    // var router = new Router(view);
    new Router(view);
    Backbone.history.start();
  };

  return {
    init: init,
  };

});