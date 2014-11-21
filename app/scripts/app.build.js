({
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'underscore': '../bower_components/underscore/underscore-min',
    'backbone': '../bower_components/backbone/backbone',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'localstorage': '../bower_components/backbone.localStorage/backbone.localStorage-min'
  },

  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    'bootstrap': {
      deps: [
        'jquery'
      ]
    }
  },

  config: {
    'api/weather' : {
      key: 'b4313c5e996ab1a9',
      prefix: 'http://api.wunderground.com/api/'
    }
  },

  appDir: "../",
  baseUrl: "scripts",
  dir: "../../app-build",
  modules: [
    {
      name: "main"
    }
  ]
})