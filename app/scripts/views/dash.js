define([
  'jquery',
  'underscore',
  'backbone',
  'collections/places',
  'views/place',
  'templates'
], function($, _, Backbone, PlacesCollection, PlaceView, Templates) {

  'use strict';

  var DASH_TEMPLATE = 'app/templates/dash.html';

  var DashView = Backbone.View.extend({

    views: [],

    initialize: function() {
      this.$el.html(Templates[DASH_TEMPLATE]());
      this.$placesList = this.$('#places-list');
      this.$dashButtons = this.$('#dash-buttons');
      this.initPlaces();
    },

    initPlaces: function() {
      this.placesCollection = new PlacesCollection([]);
      this.listenTo(this.placesCollection, 'change', this.render);
      this.placesCollection.fetch();
      // temp debug
      window.debug = {
        places: this.placesCollection
      };
    },

    render: function() {
      if (this.hasPlaces()) {
        this.renderPlaces();
      } else {
        this.$placesList.html('Sorry, there are no places to display, please add some.');
      }
      return this;
    },

    hasPlaces: function() {
      return this.placesCollection.length;
    },

    renderPlaces: function() {
      var self = this;
      this.placesCollection.each(function(placeModel) {
        var placeView = new PlaceView({
          model: placeModel,
          id: ['place-',placeModel.get('countryCode'),'-',placeModel.get('name')].join('')
        });
        self.$placesList.append(placeView.render().el);
        // In Backbone, must keep track of views for proper cleanup, o.w. memoryleak and crash :-(
        self.views.push(placeView);
      });
    }

  });

  return DashView;

});