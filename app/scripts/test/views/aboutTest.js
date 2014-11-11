define([
  'views/about',
  'jquery'
], function(AboutView, $) {
  'use strict';

  var run = function() {

    test('AboutView Render', function() {
      var $fixture = $( "#qunit-fixture" );
      var aboutView = new AboutView({
        id: 'page-about',
        className: 'page-view'
      });
      var expectedContent = 'About Page';

      $fixture.append(aboutView.render().el);

      strictEqual($fixture.text(), expectedContent, 'view contains expected content');
      strictEqual($('#qunit-fixture #page-about').length, 1, 'div with id of page-about should have been rendered');
      strictEqual($('#qunit-fixture .page-view').length, 1, 'div with class of page-view should have been rendered');
    });

  };

  return {
    run: run
  }

});