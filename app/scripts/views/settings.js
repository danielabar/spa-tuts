define([
  'jquery',
  'views/modal',
  'templates'
], function($, ModalView, Templates) {
  'use strict';

  var SETTINGS_TEMPLATE = 'app/templates/settings.html';

  var SettingsView = ModalView.extend({

    events: {
      'click #btn-save': 'saveSettings'
    },

    // call "super" initializer then inject our content in body
    initialize: function() {
      ModalView.prototype.initialize.apply(this, arguments);
      this.$bodyEl.html(Templates[SETTINGS_TEMPLATE](this.model.toJSON()));
    },

    // extract data from form
    saveSettings: function() {
      var data = {
        welcomeMessage: this.$('#welcomeMessageInput').val(),
        backgroundColor: this.$('#backgroundColorInput').val(),
        celsius: this.$('#tempType').val() === 'cel' ? true : false
      };
      // saves to local storage because AppModel is configured to use it
      this.model.save(data);
      // final cleanup
      this.$modalEl.modal('hide');
    }

  });

  return SettingsView;

});