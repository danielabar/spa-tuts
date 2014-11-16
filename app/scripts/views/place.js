define([
  'jquery',
  'underscore',
  'backbone',
  'collections/days',
  'templates',
  'api/weather'
], function($, _, Backbone, DaysCollection, Templates, Weather) {

  'use strict';

  var PLACE_TEMPLATE = 'app/templates/place.html';
  var DAY_TEMPLATE = 'app/templates/day.html';

  var PlaceView = Backbone.View.extend({

    template: Templates[PLACE_TEMPLATE],

    daysCollection: new DaysCollection([]),

    initialize: function() {
      var html = this.template(this.model.toJSON());
      this.$el.html(html);
      this.$bodyEl = this.$('.panel-body');
    },

    render: function() {
      var self = this;
      this.daysCollection.url = Weather.buildUrl(this.model.get('countryCode'), this.model.get('name'));
      this.daysCollection.fetch({
        success: function() {
          self.renderDays();
        },
        error: function(collection, response) {
          console.error('Error fetching days data: ' + collection + ', ' + response);
        }
      });
      return this;
    },

    renderDays: function() {
      var daysHtml = [];
      this.daysCollection.each(function(dayModel) {
        daysHtml.push(Templates[DAY_TEMPLATE](dayModel.toJSON()));
      });
      this.$bodyEl.html(daysHtml);
    }

  });

  return PlaceView;

});