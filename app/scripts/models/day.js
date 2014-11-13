define([
  'backbone'
], function(Backbone) {
  'use strict';

  var DayModel = Backbone.Model.extend({
    defaults: {
      'highCelsius': null,
      'lowCelsius': null,
      'highFahrenheit': null,
      'lowFahrenheit': null,
      'icon_url': ''
    },

    // Course sample code didn't have this, but I had to put the url here to make it work
    // hard code to a particular city for now
    url: 'http://api.wunderground.com/api/b4313c5e996ab1a9/forecast/q/CA/San_Francisco.json'

  });

  return DayModel;
});