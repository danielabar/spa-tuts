define([
  'views/app',
  'models/app',
  'jquery',
  'sinon'
], function(AppView, AppModel, $, sinon) {
  'use strict';

  var run = function() {

    // Couldn't figure out how to mock the child Backbone constructed objects
    // so this initializes the entire app for real.
    // Best we can do at this point is to mock ajax to prevent real network calls
    test('AppView Render', function() {
      sinon.stub($, 'ajax');

      var $fixture = $( "#qunit-fixture" );
      var appModel = new AppModel();
      var appView = new AppView({model: appModel});
      sinon.assert.called($.ajax);

      $fixture.append(appView.render().el);

      strictEqual($('#qunit-fixture #app-view').length, 1, 'app view is rendered');
      strictEqual($('#qunit-fixture #app-view .navbar').length, 1, 'navbar is rendered');
      strictEqual($('#qunit-fixture #app-view #content').length, 1, 'content container is rendered');
      strictEqual($('#qunit-fixture #app-view #content .page-view').length, 2, 'two child views are rendered');
      strictEqual($('#qunit-fixture #app-view #content #page-dash').is(':visible'), true, 'dashboard page is shown when app view is initialized');

      $.ajax.restore();
    });

    test('AppView setView: about', function() {
      sinon.stub($, 'ajax');
      var $fixture = $( "#qunit-fixture" );
      var appModel = new AppModel();
      var appView = new AppView({model: appModel});
      sinon.assert.called($.ajax);

      $fixture.append(appView.render().el);

      appView.setView('about');
      strictEqual($('#qunit-fixture #app-view #content #page-dash').is(':visible'), false, 'dashboard page is hidden when about page is set');

      $.ajax.restore();
    });

    test('AppView setNav: about', function() {
      sinon.stub($, 'ajax');
      var $fixture = $( "#qunit-fixture" );
      var appModel = new AppModel();
      var appView = new AppView({model: appModel});
      sinon.assert.called($.ajax);

      $fixture.append(appView.render().el);

      appView.setNav('about');
      strictEqual($('#qunit-fixture #app-view .navbar ul.nav li#nav-about').attr('class'), 'active', 'About nav item gets active class');

      $.ajax.restore();
    });

  };

  return {
    run: run
  };

});