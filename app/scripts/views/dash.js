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

      this.collection = new PlacesCollection([]);
      this.listenTo(this.collection, 'change', this.render);
      this.collection.fetch();

      // temp debug
      window.debug = {
        places: this.collection
      };
    },

    render: function() {
      var self = this;
      if (this.collection.length) {
        this.collection.each(function(element) {
          var place = new PlaceView({
            model: element,
            id: ['place-',element.get('countryCode'),'-',element.get('name')].join('')
          });
          self.$placesList.append(place.render().el);

          // In Backbone, must keep track of views for proper cleanup, o.w. memoryleak and crash :-(
          self.views.push(place);
        });
      } else {
        this.$placesList.html('Sorry, there are no places to display, please add some.');
      }
      return this;
    }

  });

  return DashView;

});