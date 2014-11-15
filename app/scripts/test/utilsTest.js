define([
  '../utils'
], function(Utils) {
  'use strict';

  var run = function() {

    test('celsiusToFahrenheit', function() {
      strictEqual(Utils.celsiusToFahrenheit(32), 89.6, 'Converts 32 celsius to 89.6 fahrenheit');
      strictEqual(Utils.celsiusToFahrenheit('hot'), null, 'Returns null when given a string');
      strictEqual(Utils.celsiusToFahrenheit(), null, 'Returns null when given undefined');
      strictEqual(Utils.celsiusToFahrenheit(NaN), null, 'Returns null when given NaN');
    });

  };

  return {
    run: run
  };

});