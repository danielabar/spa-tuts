define([
  'backbone',
  'models/day'
], function(Backbone, DayModel) {
  'use strict';

  var DaysCollection = Backbone.Collection.extend({
    model: DayModel,

    // Course sample code didn't have this, but I had to put the url here to make it work
    // hard code to a particular city for now
    url: 'http://api.wunderground.com/api/b4313c5e996ab1a9/forecast/q/CA/San_Francisco.json',

    sync: function(method, model, options) {
      options.timeout = 8000;
      options.dataType = 'jsonp';
      return Backbone.sync(method, model, options);
    },

    parse: function(response) {
      return response.forecast.simpleforecast.forecastday;
    }
  });

  return DaysCollection;

});