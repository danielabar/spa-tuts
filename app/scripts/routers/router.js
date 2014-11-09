define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

  'use strict';

  var Router = Backbone.Router.extend({

    appView: null,

    routes: {
      '': 'goToDash',
      'dash': 'goToDash',
      'dash/:place': 'goToDash',
      'about': 'goToAbout'
    },

    // This router will be instantiated from the App View, which will pass an instance of itself as an argument
    initialize: function(view) {
      this.appView = view;
    },

    goToDash: function(place) {
      this.appView.setPage('dash');
      if (place) {
        console.log('Showing weather detail for: ' + place);
      }
    },

    goToAbout: function() {
      this.appView.setPage('about');
    }
  });

  return Router;

});