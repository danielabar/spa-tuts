// Configure the tests
require.config({

  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'underscore': '../bower_components/underscore/underscore-min',
    'backbone': '../bower_components/backbone/backbone',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'QUnit': '../bower_components/qunit/qunit/qunit'
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
  }

});

// Start the tests
require([
  'QUnit',
  'test/utilsTest'
], function(QUnit, utilsTest) {
    'use strict';
    utilsTest.run();
    QUnit.load();
    QUnit.start();
});