define([
  'api/weather'
], function(Weather) {
  'use strict';

  var run = function() {

    test('buildUrl', function() {
      strictEqual(
        Weather.buildUrl('IT', 'Rome'),
        'http://unittest.api.wunderground.com/api/unit-test-weather-api-key/forecast/q/IT/Rome.json',
        'Country code and city are part of url');
    });

  };

  return {
    run: run
  };

});