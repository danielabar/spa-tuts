define([
  'backbone',
  'models/day'
], function(Backbone, DayModel) {
  'use strict';

  var DaysCollection = Backbone.Collection.extend({
    model: DayModel,

    sync: function(method, model, options) {
      options.timeout = 8000;
      options.dataType = 'jsonp';
      return Backbone.sync(method, model, options);
    },

    // FIXME If more than one match for city (eg: Toronto), response does not look like this
    parse: function(response) {
      if (response.response.error) {
        console.error(response.response.error.description);
      } else {
        return response.forecast.simpleforecast.forecastday;
      }
    }
  });

  return DaysCollection;

});