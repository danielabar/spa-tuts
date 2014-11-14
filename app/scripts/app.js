define([
  'views/app',
  'models/app',
  'routers/router',
  'collections/days',
  'models/day'
], function(AppView, AppModel, Router, DaysCollection, DayModel) {

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
      model: DayModel
    });

    daysCollection.fetch({
      success: function(collection, response, options) {
        console.log('success!');
        console.dir(collection);
        console.dir(response);
      },
      error: function(collection, response, options) {
        console.log('error!');
        console.dir(collection);
        console.dir(response);
      }
    });
  };

  return {
    init: init,
  }

});