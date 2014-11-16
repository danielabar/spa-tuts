define([
  'jquery',
  'underscore',
  'backbone',
  'collections/days',
  'templates'
], function($, _, Backbone, DaysCollection, Templates) {

  'use strict';

  var PLACE_TEMPLATE = 'app/templates/place.html';
  var DAY_TEMPLATE = 'app/templates/day.html';

  var PlaceView = Backbone.View.extend({

    template: Templates[PLACE_TEMPLATE],

    collection: new DaysCollection([]),

    // static portion of html rendered here
    initialize: function() {
      var html = this.template(this.model.toJSON());
      this.$el.html(html);
      this.$bodyEl = this.$('.panel-body');
    },

    // render dynamic portion of html here
    render: function() {
      var self = this;
      // TODO extract url building to utility method
      this.collection.url = [
        'http://api.wunderground.com/api/',
        'b4313c5e996ab1a9',
        '/forecast/q/',
        this.model.get('countryCode'),
        '/',
        this.model.get('name'),
        '.json'
      ].join('');

      this.collection.fetch({
        success: function() {
          // no need to pass collection to renderDay because its part of the view and already has access
          self.renderDays();
        },
        error: function(collection, response) {
          console.dir(collection);
          console.error(response);
        }
      });

      return this;
    },

    renderDays: function() {
      var daysHtml = [];
      this.collection.each(function(model) {
        daysHtml.push(Templates[DAY_TEMPLATE](model.toJSON()));
      });
      this.$bodyEl.html(daysHtml);
    }

  });

  return PlaceView;

});