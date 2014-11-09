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
      'about': 'goToAbout'
    },

    // This router will be instantiated from the App View, which will pass an instance of itself as an argument
    initialize: function(view) {
      this.appView = view;
    },

    goToDash: function() {
      this.appView.setPage('dash');
    },

    goToAbout: function() {
      this.appView.setPage('about');
    }
  });

  return Router;

});