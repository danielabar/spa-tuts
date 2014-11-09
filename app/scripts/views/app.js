define([
  'jquery',
  'underscore',
  'backbone',
  'views/counter'
], function($, _, Backbone, CounterView) {

  'use strict';

  // Later we'll learn how to use templates to control html output
  var AppView = Backbone.View.extend({
    id: 'app-view',
    html: [
            '<div class="navbar navbar-default">',
              '<a href="#" class="navbar-brand">Weather Watcher</a>',
              '<ul class="nav navbar-nav">',
                '<li id="nav-dash"><a href="#">Dashboard</a></li>',
                '<li id="nav-about"><a href="#">About</a></li>',
              '</ul>',
            '</div>',
            '<div id="content"></div>'
          ].join(''),

    events: {
      'click #nav-dash': 'onNavDash',
      'click #nav-about': 'onNavAbout'
    },

    initialize: function() {
      this.$el.append(this.html);
    },

    onNavAbout: function(e) {
      console.log('About clicked');
    },

    onNavDash: function(e) {
      console.log('Dash clicked');
    }
  });

  return AppView;

});