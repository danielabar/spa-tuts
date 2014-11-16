define([
  'jquery',
  'backbone',
  'templates',
  'bootstrap'
], function($, Backbone, Templates) {
  'use strict';

  var MODAL_TEMPLATE = 'app/templates/modal.html';

  var ModalView = Backbone.View.extend({
    id:'modal-view',

    initialize: function(options) {
      this.options = options || {};
      var title = this.options.title || '';
      var appendTo = this.options.appendTo || 'body';

      this.$el.html(Templates[MODAL_TEMPLATE]({title: title}));
      this.$modalEl = this.$('.modal');
      this.$bodyEl = this.$('.modal-body');
      this.$titleEl = this.$('.modal-title');

      $(appendTo).append(this.el);
    },

    events: {

    },

    render: function() {
      // modal is the Bootstrap jQuery plugin method
      this.$modalEl.modal({
        show: false,
        keyboard: false
      });
      return this;
    },

    show: function() {
      var self = this;
      this.$modalEl.modal('show');
      // attach custom event listener so we can listen for when the modal is closed
      this.$modalEl.on('hidden.bs.modal', function() {
        self.onModalHidden();
      });
    },

    onModalHidden: function() {
      // remove custom event listener
      this.$modalEl.off('hidden.bs.modal');
      // properly cleanup the backbone view
      this.remove();
    }

  });

  return ModalView;

});