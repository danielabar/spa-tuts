define([
  'views/about',
  'jquery'
], function(AboutView, $) {
  'use strict';

  var run = function() {

    test('AppView Render', function() {
      var aboutView = new AboutView({
        id: 'page-about',
        className: 'page-view'
      });
      $('#qunit-fixture').append(aboutView.render().el);
      strictEqual($('#qunit-fixture').text(), 'About Page', 'the rendered contents');
    });

  };

  return {
    run: run
  }

});