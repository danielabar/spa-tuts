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
    }

  });

  return DayModel;
});