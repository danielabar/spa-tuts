define([
  'views/app',
  'models/app',
  'routers/router',
  'collections/days'
], function(AppView, AppModel, Router, DaysCollection) {

  'use strict';

  var init = function() {
    var appView = initView();
    initRouter(appView);
    initData();
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

  var initData = function() {
    var daysCollection = new DaysCollection([], {
      url: 'http://api.wunderground.com/api/b4313c5e996ab1a9/forecast/q/CA/San_Francisco.json'
    });

    daysCollection.fetch({
      success: function(collection, response, options) {
        console.log('success!');
        console.dir(collection);
        console.dir(response);
      },
      error: function(collection, response, options) {
        console.log('success!');
        console.dir(collection);
        console.dir(response);
      }
    });
  };

  return {
    init: init,
  }

});