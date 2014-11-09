define([
  '../utils'
], function(Utils) {
  'use strict';

  var run = function() {
    test('Test celsius to fahrenheit calculation', function() {
      strictEqual(Utils.celsiusToFahrenheit(32), 89.6, 'Test a number');
      strictEqual(Utils.celsiusToFahrenheit('hot'), null, 'Test a string');
      strictEqual(Utils.celsiusToFahrenheit(), null, 'Test undefined');
    });
  };

  return {
    run: run
  }

});