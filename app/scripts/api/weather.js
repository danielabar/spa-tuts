define([
  'module'
], function(module) {
  'use strict';

  var FORECAST = '/forecast/q/';
  var FORMAT = '.json';

  var buildUrl = function(countryCode, city) {
    return [
        module.config().prefix,
        module.config().key,
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