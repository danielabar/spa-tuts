define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

  'use strict';

  var CounterView = Backbone.View.extend({

    count: 0,

    initialize: function() {

    },

    events: {
      'click span': 'incrementCounter',
      'click strong': 'removeView'
    },

    render: function() {
      var html = '<h3>This view has been <span>clicked</span> ' + this.count + ' times. <strong>REMOVE</strong></h3>';
      this.$el.html(html);

      // Return entire view object to parent view, this will make it easier to render later
      return this;
    },

    // Separate data handling from view rendering
    incrementCounter: function(e) {
      this.count++;
      this.render();
    },

    removeView: function(e) {
      this.remove();
    }

  });

  return CounterView;

});