define([
  'views/app',
  'models/app',
  'routers/router',
  'collections/days',
  'models/day',
  'collections/places'
], function(AppView, AppModel, Router, DaysCollection, DayModel, PlacesCollection) {

  'use strict';

  var init = function() {
    var appView = initView();
    initRouter(appView);

    // temporarily comment out data portion, we'll come back to this later
    // initData();

    initPlaces();

  };

  var initView = function() {
    // Give the model an id to help localstorage later when we fetch
    var appModel = new AppModel({id: 1});

    var appView = new AppView({model: appModel});
    $('body').append(appView.render().el)

    // Get the saved model from local storage
    appModel.fetch();

    // temp debug (because using RequireJS nothing is exposed to global)
    window.debug = {
      settings: appModel
    };

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

  var initPlaces = function() {
    var placesCollection = new PlacesCollection([]);
    placesCollection.fetch();

    // temp debug
    window.debug = {
      places: placesCollection
    }
  };

  return {
    init: init,
  }

});