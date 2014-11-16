define([
  'jquery',
  'underscore',
  'backbone',
  'collections/places',
  'views/place',
  'templates',
  'views/addPlace'
], function($, _, Backbone, PlacesCollection, PlaceView, Templates, AddPlaceView) {

  'use strict';

  var DASH_TEMPLATE = 'app/templates/dash.html';

  var DashView = Backbone.View.extend({

    views: [],

    events: {
      'click #btn-add-new': 'addNewPlace'
    },

    initialize: function() {
      this.$el.html(Templates[DASH_TEMPLATE]());
      this.$placesList = this.$('#places-list');
      this.$dashButtons = this.$('#dash-buttons');
      this.initPlaces();
    },

    initPlaces: function() {
      this.placesCollection = new PlacesCollection([]);
      this.listenTo(this.placesCollection, 'change', this.render);
      this.placesCollection.fetch(); // PlacesCollection is backed by local storage
      // temp debug
      window.debug = {
        places: this.placesCollection
      };
    },

    render: function() {
      this.cleanUp();
      if (this.hasPlaces()) {
        this.renderPlaces();
      } else {
        this.$placesList.html('Sorry, there are no places to display, please add some.');
      }
      return this;
    },

    cleanUp: function() {
      for (var i = 0; i<this.views.length; i++) {
        this.views[i].remove();
      }
      this.views.length = 0;
      this.$placesList.html('');
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
        // In Backbone, must keep track of views for proper cleanup, o.w. get zombie views -> memory leak -> crash
        self.views.push(placeView);
      });
    },

    addNewPlace: function() {
      var modal = new AddPlaceView({
        id: 'modal-add-new-place',
        collection: this.placesCollection,
        title: 'Add a new place'
      });
      modal.show();
    }

  });

  return DashView;

});