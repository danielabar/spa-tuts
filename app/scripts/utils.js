define([
], function() {
  'use strict';

  var isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  var celsiusToFahrenheit = function(celsuis) {
    if (!isNumber(celsuis)) {
      return null;
    }
    var fahr = celsuis * 9 / 5 + 32;
    return fahr;
  };

  return {
    celsiusToFahrenheit: celsiusToFahrenheit
  };

});