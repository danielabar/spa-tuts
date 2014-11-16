define([
  'jquery',
  'views/modal',
  'templates'
], function($, ModalView, Templates) {
  'use strict';

  var ADD_PLACE_TEMPLATE = 'app/templates/addPlace.html';

  var AddPlaceView = ModalView.extend({

    events: {
      'click #btn-add': 'addNewPlace'
    },

    // call "super" initializer then inject our content in body
    initialize: function() {
      ModalView.prototype.initialize.apply(this, arguments);
      this.$bodyEl.html(Templates[ADD_PLACE_TEMPLATE]());
    },

    addNewPlace: function() {
      // Create a new place model to add to collection
      var place = {
        countryCode: this.$('#countryCodeInput').val(),
        name: this.$('#nameInput').val()
      };
      // But where did collection come from? Comes from caller who instantiated this view
      this.collection.create(place);
      this.$modalEl.modal('hide');
    }

  });

  return AddPlaceView;

});