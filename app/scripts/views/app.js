define([
  'jquery',
  'underscore',
  'backbone',
  'views/about',
  'views/dash',
  'templates'
], function($, _, Backbone, AboutView, DashView, Templates) {

  'use strict';

  var APP_TEMPLATE = 'app/templates/app.html';

  var AppView = Backbone.View.extend({
    id: 'app-view',
    events: {},
    views: {},

    // Backbone framework calls initialize method when View is instantiated
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.$el.append(Templates[APP_TEMPLATE]());
      this.initializeChildViews();
    },

    // Custom naming convention is used to show/hide views dynamically
    initializeChildViews: function() {
      this.views['about'] = new AboutView({
        id: 'page-about',
        className: 'page-view'
      });
      this.views['dash'] = new DashView({
        id: 'page-dash',
        className: 'page-view'
      });
      this.appendChildViews(this.views);
    },

    appendChildViews: function(views) {
      var self = this;
      _.each(views, function(value) {
        self.$('#content').append(value.render().el);
      });
    },

    render: function() {
      this.$el.css('background-color', this.model.get('backgroundColor'));
      this.$('.navbar-text').html(this.model.get('welcomeMessage'));
      return this;
    },

    setPage: function(page) {
      this.setView(page);
      this.setNav(page);
    },

    setView: function(page) {
      this.$('.page-view').hide();
      this.$('#page-'+page).show();
    },

    setNav: function(page) {
      this.$('.nav li').removeClass('active');
      this.$('#nav-'+page).addClass('active');
    }

  });

  return AppView;

});