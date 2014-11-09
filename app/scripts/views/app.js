define([
  'jquery',
  'underscore',
  'backbone',
  'views/about',
  'views/dash'
], function($, _, Backbone, AboutView, DashView) {

  'use strict';

  // Later we'll learn how to use templates to control html output
  var AppView = Backbone.View.extend({
    id: 'app-view',
    html: [
            '<div class="navbar navbar-default">',
              '<a href="#" class="navbar-brand">Weather Watcher</a>',
              '<ul class="nav navbar-nav">',
                '<li id="nav-dash"><a href="#dash">Dashboard</a></li>',
                '<li id="nav-about"><a href="#about">About</a></li>',
              '</ul>',
            '</div>',
            '<div id="content"></div>'
          ].join(''),

    events: {},

    views: {},

    initialize: function() {
      this.$el.append(this.html);
      this.initializeChildViews();
      this.appendChildViews(this.views);
    },

    // Our custom naming convention will come in handy when we want to show/hide views dynamically
    initializeChildViews: function() {
      this.views['about'] = new AboutView({
        id: 'page-about',
        className: 'page-view'
      });
      this.views['dash'] = new DashView({
        id: 'page-dash',
        className: 'page-view'
      });
    },

    appendChildViews: function(views) {
      var self = this;
      _.each(views, function(value) {
        self.$('#content').append(value.render().el);
      });
    },

    setPage: function(page) {
      this.$('.page-view').hide();
      this.$('#page-'+page).show();
    }

  });

  return AppView;

});