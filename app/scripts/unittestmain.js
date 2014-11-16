// Configure the tests
require.config({

  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'underscore': '../bower_components/underscore/underscore-min',
    'backbone': '../bower_components/backbone/backbone',
    'localstorage': '../bower_components/backbone.localStorage/backbone.localStorage-min',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'QUnit': '../bower_components/qunit/qunit/qunit',
    'sinon': '../scripts/test/libs/sinon-1.12.1'
  },

  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    'bootstrap': {
      deps: [
        'jquery'
      ]
    },
    'QUnit': {
      exports: 'QUnit',
      init: function() {
        QUnit.config.autoload = false;
        QUnit.config.autostart = false;
      }
    }
  },

  config: {
    'api/weather' : {
      key: 'unit-test-weather-api-key',
      prefix: 'http://unittest.api.wunderground.com/api/'
    }
  }

});

// Start the tests
require([
  'QUnit',
  'test/utilsTest',
  'test/views/aboutTest',
  'test/views/appTest',
  'test/api/weatherTest'
], function(QUnit, utilsTest, aboutViewTest, appViewTest, weatherTest) {
    'use strict';
    utilsTest.run();
    aboutViewTest.run();
    appViewTest.run();
    weatherTest.run();
    QUnit.load();
    QUnit.start();
});