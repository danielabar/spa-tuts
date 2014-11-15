// For convenice, all application templates will be located in a single module

define([
  'underscore'
], function(_) {
  'use strict';

  var Templates = {};

  Templates['place'] = [
    '<div class="panel panel-info">',
      '<div class="panel-heading">',
        '<h3 class="panel-title"><%= name %> - <%= countryCode %></h3>',
      '</div>',
      '<div class="panel-body">',
        'Panel content TBD',
      '</div>',
    '</div>'
  ].join('');

  // precompile all the tmeplates
  for (var tmpl in Templates) {
    if (Templates.hasOwnProperty(tmpl)) {
      Templates[tmpl] = _.template(Templates[tmpl]);
    }
  }

  return Templates;
});