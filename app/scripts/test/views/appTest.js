define([
  'views/app',
  'models/app',
  'jquery'
], function(AppView, AppModel, $) {
  'use strict';

  var run = function() {

    // FIXME Can we use a mock model instead of instantiating the real one to test the view?
    test('AppView Render', function() {
      var $fixture = $( "#qunit-fixture" );
      var appModel = new AppModel();
      var appView = new AppView({model: appModel});
      $fixture.append(appView.render().el);

      strictEqual($('#qunit-fixture #app-view').length, 1, 'app view is rendered');
      strictEqual($('#qunit-fixture #app-view .navbar').length, 1, 'navbar is rendered');
      strictEqual($('#qunit-fixture #app-view #content').length, 1, 'content container is rendered');
      strictEqual($('#qunit-fixture #app-view #content .page-view').length, 2, 'two child views are rendered');
      strictEqual($('#qunit-fixture #app-view #content #page-dash').is(':visible'), true, 'dashboard page is shown when app view is initialized');
    });

    test('AppView setView: about', function() {
      var $fixture = $( "#qunit-fixture" );
      var appModel = new AppModel();
      var appView = new AppView({model: appModel});
      $fixture.append(appView.render().el);

      appView.setView('about');
      strictEqual($('#qunit-fixture #app-view #content #page-dash').is(':visible'), false, 'dashboard page is hidden when about page is set');
    });

    test('AppView setNav: about', function() {
      var $fixture = $( "#qunit-fixture" );
      var appModel = new AppModel();
      var appView = new AppView({model: appModel});
      $fixture.append(appView.render().el);

      appView.setNav('about');
      strictEqual($('#qunit-fixture #app-view .navbar ul.nav li#nav-about').attr('class'), 'active', 'About nav item gets active class');
    })

  };

  return {
    run: run
  }

});