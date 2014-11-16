define([
], function() {
  'use strict';

  var KEY = 'b4313c5e996ab1a9';
  var PREFIX = 'http://api.wunderground.com/api/';
  var FORECAST = '/forecast/q/';
  var FORMAT = '.json';

  var buildUrl = function(countryCode, city) {
    return [
        PREFIX,
        KEY,
        FORECAST,
        countryCode,
        '/',
        city,
        FORMAT
      ].join('');
  };

  return {
    buildUrl: buildUrl
  };

});