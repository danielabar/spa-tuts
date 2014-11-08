// Configure the app
require.config({

  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'underscore': '../bower_components/underscore/underscore-min',
    'backbone': '../bower_components/backbone/backbone',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
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
    }
  }

});

// Start the app
require([
  'backbone'
], function(Backbone) {
    'use strict';
    console.dir(Backbone);
});