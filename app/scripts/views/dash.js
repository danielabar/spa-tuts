define([
  'jquery',
  'underscore',
  'backbone',
  'collections/places',
  'templates/templates'
], function($, _, Backbone, PlacesCollection, Templates) {

  'use strict';

  var DashView = Backbone.View.extend({

    html: [
      '<h3>Dashboard page</h3>',
      '<div id="places-list" class="clearfix">Loading...</div>',
      '<div id="dash-buttons"></div>'
    ].join(''),

    initialize: function() {
      this.$el.html(this.html);
      this.$placesList = this.$('#places-list');
      this.$dashButtons = this.$('#dash-buttons');

      this.collection = new PlacesCollection([]);
      this.listenTo(this.collection, 'change', this.render);
      this.collection.fetch();

      // temp debug
      window.debug = {
        places: this.collection
      }
    },

    render: function() {
      if (this.collection.length) {
        var placesHtml = [];
        this.collection.each(function(model, index, list) {
          // temp debug
          console.log(Templates['place'](model.toJSON()));
          placesHtml.push(Templates['place'](model.toJSON()));
        });
        console.log(placesHtml.join(''));
        this.$placesList.html(placesHtml.join(''));
      } else {
        this.$placesList.html('Sorry, there are no places to display, please add some.');
      }
      return this;
    }

  });

  return DashView;

});