<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [spa-tuts](#spa-tuts)
  - [Project Analysis](#project-analysis)
    - [Models](#models)
    - [Views and Templates](#views-and-templates)
    - [Application Logic (aka Controller)](#application-logic-aka-controller)
      - [Routes](#routes)
  - [Choosing our tools](#choosing-our-tools)
    - [Dependencies and modules](#dependencies-and-modules)
    - [Components](#components)
    - [Boilerplate code](#boilerplate-code)
    - [Architecture](#architecture)
    - [Unit testing](#unit-testing)
  - [Project Setup](#project-setup)
    - [Using RequireJS](#using-requirejs)
  - [Backbone Views](#backbone-views)
    - [Remove View](#remove-view)
  - [Backbone Router](#backbone-router)
  - [Unit Testing and TDD](#unit-testing-and-tdd)
    - [What makes a good unit test?](#what-makes-a-good-unit-test)
    - [Test setup](#test-setup)
  - [WebService](#webservice)
  - [Setting up Models and Collections](#setting-up-models-and-collections)
  - [Local Storage](#local-storage)
    - [RequireJS debug trick](#requirejs-debug-trick)
    - [Local Storage and Collections](#local-storage-and-collections)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

spa-tuts
========

Notes and project from Tuts Plus course [Building JavaScript Webapps](https://code.tutsplus.com/courses/building-javascript-web-apps)

We will be building a weather app, as a single page application.

## Project Analysis

First mock up some screens and interactions. [MockFlow](http://app.mockflow.com/) is a free online tool to do this.

[MVC](https://code.tutsplus.com/tutorials/mvc-for-noobs--net-10488) architectural pattern will be used for this project.

### Models

Page Model (data for settings page)

  ```
    "backgroundColor" : ""
    "celsius" : true
    "welcomeMessage" : ""
  ```

Place Model (data for each place user would like to see weather for, will have many of these)

  ```
  "country"
  "name"
  "displayName"
  "long"
  "lat"
  ```

Since we'll have many places, will need a *collection*, which are handled differently in different frameworks.

Will be using [wunderground](http://www.wunderground.com/api) API for weather data.

Will also be using HTML5 [Local Storage](https://code.tutsplus.com/tutorials/quick-tip-learning-about-html5-local-storage--net-10837)

### Views and Templates

How to break up application dispay components and structure code? Are there repeating visual patterns that could be templated?

  ```
  Place View (small or expanded) - add X to close
  Place Data View
  Page View - header?
  Settings View
  Add Place View
  Error or Alert view
  ```

### Application Logic (aka Controller)

  ```
  Add a place
  Remove a place
  Open Settings
  Close Settings
  Retrieve weather data
  Save place data
  Save settings data
  Open place detail view
  ```

#### Routes

Support deep linking to any particular place, for example `appurl.com/#/place/sydney`

## Choosing our tools

Evaluate strengths and weaknesses of various frameworks, tools and libraries to determine which ones to use for the project.

Considerations:

1. Does it make sense? for example, syntax
1. Is it well documented, is it easy to navigate the documentation?
1. Is there support, a community, plugins?
1. How much magic is there? (behind the scenes logic that is hidden and/or hard to understand)

For this project, need to select tools to solve the following:

### Dependencies and modules

Makes code more tidy. Rather than including a whole bunch of script tags in html, only include a single script tag for the dependency manager,
then it can do the work to load all the other dependencies, in the order they're needed.

Would also like a build process, to minify code to make more efficient website in production.

Coding in modules, make cleaner more independent code blocks that are re-usable.

Decision: [RequireJS](http://requirejs.org/)

### Components

For building UI components such as buttons, dropdowns, overlays etc.

Want common interface elements, that are compatible cross-browser.

Decision: [Bootstrap](http://getbootstrap.com/)

### Boilerplate code

[HTML5 Boilerplate index.html](https://github.com/h5bp/html5-boilerplate/blob/master/src/index.html)

### Architecture

Choose a framework with an MV* approach.

[Backbone](http://backbonejs.org/) is lightweight, simple, and not too many dependencies.

Another option is [AngularJS](https://angularjs.org/) but not the best for initial learning of JavaScript and MV* because "too much magic".

[EmberJS](http://emberjs.com/) is another framework that does a lot behind the scenes.

Decision: Backbone

### Unit testing

Every module should be [tested](https://code.tutsplus.com/tutorials/how-to-test-your-javascript-code-with-qunit--net-9077)
in an automated fashion, and tests should be run with each change made to code.

[Jasmine](http://jasmine.github.io/) has a great natural language like API, but difficult to configure with RequireJS.

Decision: [Qunit](http://qunitjs.com/)

## Project Setup

Start with a [custom build](http://www.initializr.com/) of HTML5 boilerplate.

  ```bash
  bower init
  bower install jquery --save
  bower install modernizr --save
  bower install bootstrap --save
  bower install requirejs --save
  bower install backbone --save
  bower install underscore --save
  ```

### Using RequireJS

  ```html
  <script data-main="scripts/main" src="bower_components/requires/require.js"></script>
  ```

`data-main` attribute tells RequireJS which module should be loaded to bootstrap the application.
This module should call `require.config({...})` to configure the application.

`shim` is used to make non-AMD libraries (eg: underscore and backbone) compatible with RequireJS.

To start the app, call `require(...)` method.

## Backbone Views

[Backbone views](http://backbonejs.org/#View) are responsible for what the user sees,
and for managing interactions from the user. Usually a view is backed by a [model](http://backbonejs.org/#Model).

Backbone uses views in a similar way to how other frameworks use controllers.

Every view gets assigned to it, by default, and html div element.

Each view also gets its own $ jQuery function that is scoped to only elements within the view,
making it more efficient than searching the entire html document.

Every view has an `initialize()` method that should contain things that are only needed once when view is first instantiated.

Every view also has a `render()` method that should be repeatable. It updates the view to represent the latest data.

Every view has a `remove()` method which not only removes the view element from the DOM, but also unbinds any event listeners.

`delegateEvents()` method hooks up any custom events you want the view to listen for.

With a single page app, only want to re-render parts of the page that have changed.
To do this in Backbone, break up main app view into multiple sub views.
Then each view is responsible for its own rendering.

### Remove View

Views can also be responsible for their own removal by calling `this.remove()` method.

But this only removes the view from the DOM. The view object still exists.

## Backbone Router

`routes` is a hash of routes to function names to execute when those routes are encountered.

The empty route defines what function to execute when just `#` or no route is encountered.

  ```javascript
  var Router = Backbone.Router.extend({

    routes: {
      '': 'goToDash',
      'dash': 'goToDash',
      'about': 'goToAbout'
    },

    goToDash: function() {
      // do something...
    }
  });
  ```

Can implement a custom `initialize` method on the Router.
Backbone will call the Router's initialize method when it's instantiated.

Routes can accept variables, using `:` syntax, for example:

  ```javascript
  routes : {
    'dash/:place': 'goToDash'
  },
  goToDash: function(place) {
    // do something with place
  }

## Unit Testing and TDD

Write tests for each module before developing it. Benefits include:

* Focus on use of modules, such as expected inputs and outputs
* Define expected behaviour when module functions receive unexpected input
* Document the code
* Makes refactoring less dangerous

### What makes a good unit test?

Use the acronym: **A-TRIP**

<dl>
  <dt>A</dt>
  <dd>Automatic, incorporated into build process such that they are run on every code change.</dd>
  <dt>T</dt>
  <dd>Thorough, unit tests should cover happy path AND ALL edge cases.</dd>
  <dt>R</dt>
  <dd>Repeatable, every time tests are run, should get exactly the same results.</dd>
  <dt>I</dt>
  <dd>
    Independent, each test should be able to run, without relying on another test having instantiated something before it.
    Each test should setup whatever data it needs before it runs, and destroy/cleanup afterwards.
  </dd>
  <dt>P</dt>
  <dd>Professional, just as professional as production code. Keep your tests well formatted, clean and easy to follow.</dd>
</dl>

### Test setup

  ```bash
  bower install qunit --save-dev
  ```

Create a `test-runner.html` file in same dir as `index.html`, and reference qunit.css.
Use require.js pointing to a `unittestmain` to initialize the tests:

  ```html
  <script data-main="scripts/unittestmain" src="bower_components/requirejs/require.js"></script>
  ```

`unittestmain.js` is a copy of `main.js`, plus qunit defined and shimmed.
Also configure QUnit to not automatically start as soon as it loads (becase it will be controlled via unittestmain initialization).

## WebService

Will be using AJAX to get data from a weather service, without requiring a full page refresh on the front end.

Examples of RESTful API's: [Twitter](https://dev.twitter.com/rest/public), [Tumblr](https://www.tumblr.com/docs/en/api/v2)

For this application, will be using [Wunderground](http://www.wunderground.com/weather/api/d/docs)

Will have to use the API with JSONP because it doesn't support CORS.

## Setting up Models and Collections

[Backbone Models](http://backbonejs.org/#Model) manage data. They're responsible for reading/writing data for controllers and views.
Models are also usually responsible for communicating with the server. (some frameworks have separate proxy object for this)

[Backbone Collections](http://backbonejs.org/#Collection) hold a list of models. May be called "lists" or "stores".

Think of models and collections like JavaScript objects and arrays, but with extra functions to help manage the data.

For example, models have getters and setters that fire a "change" event, which views can use to monitor the same model for changes to its data.

Collections also have events, and have methods to help group, filter and search models.

Usage: Instantiate a model, then pass it to the view constructor. For example

  ```javascript
  // models/app.js
  var AppModel = Backbone.Model.extend({
    defaults: {
      'backgroundColor': '#999999',
      'celsius': true,
      'welcomeMessage': 'Welcome to Weather Watcher'
    }
  });

  // views/app.js
  var AppView = Backbone.View.extend({
    id: 'foo',
    // ...
  });

  // app.js
  var appModel = new AppModel();
  var appView = new AppView({model: appModel});
  ```

To tell a view to refresh whenever the model changes, add this line in view's `initialize` method:

  ```javascript
  this.listenTo(this.model, 'change', this.render);
  ```

Collections are the model. You can also add custom options to the sync method, and customize the parse method.

  ```javascript
  // models/day.js
  var DayModel = Backbone.Model.extend({
    defaults: {
      'highCelsius': null,
      'lowCelsius': null,
      'highFahrenheit': null,
      'lowFahrenheit': null,
      'icon_url': ''
    }
  });

  // collections/days.js
  var DaysCollection = Backbone.Collection.extend({
    model: DayModel,

    sync: function(method, model, options) {
      options.timeout = 8000;
      options.dataType = 'jsonp';
      return Backbone.sync(method, model, options);
    },

    parse: function(response) {
      return response.forecast.simpleforecast.forecastday;
    }
  });
  ```

To instantiate a collection, first argument is array (if you want it populated with some objects, or pass empty array),
second argument is the url which Backbone will call to populate the model. For example

  ```javascript
  var daysCollection = new DaysCollection([], {
    url: 'http://api.wunderground.com/api/12345/forecast/q/CA/San_Francisco.json'
  });

To start the model population, call the `fetch` method of the collection, passing in success and error callbacks.

If data from server comes back in a different structure than what you want in the Backbone model,
define a custom `parse` method on the model to transform it.

`parse` method gets passed in a `data` argument, which is an object in the array returned from collection's parse method.

It's good practice to use the parse method to map server response to a model data, because if the server side changes
structure of their data, only have to modify parse map to update front end application to match server side change.

## Local Storage

Simple API for permanently storing data in the users browser. Excellent browser [support](http://caniuse.com/#search=localstorage).

To write a value

  ```javascript
  localStorage.setItem('testkey', 'Hello world!');
  ```

To retrieve value

  ```javascript
  localStorage.getItem('testkey');  // Hello world!
  ```

How many items currently in storage (for the current domain)

  ```javascript
  localstorage.length
  ```

[Backbone.localstorage](https://github.com/jeromegn/Backbone.localStorage) is a library to store Models and Collections as JSON to local storage.

  ```bash
  ower install backbone.localStorage --save
  ```

To use it, add it to model settings, for example

  ```javascript
  var AppModel = Backbone.Model.extend({
    localStorage: new Backbone.LocalStorage('AppSettings'),
    defaults: {
      'backgroundColor': '#999999',
      'celsius': true,
      'welcomeMessage': 'Welcome to Weather Watcher'
    }
  });
  ```

### RequireJS debug trick

Trick for debugging RequireJS app in browser console (because otherwise, nothing is exposed to global).

Somewhere in module code:

  ```javascript
  var appModel = new AppModel();
  window.debug = {
    settings: appModel
  };
  ```

Then in browser console

  ```javascript
  debug.settings;   // outputs appModel object
  debug.settings.set('backgroundColor', '#990000')  // manipulates the model object
  debug.settings.save()   // saves model in local storage
  ```

Backbone localstorage needs you to set an id in the model so it knows which one to fetch from local storage.
(otherwise it keeps creating new entries).

### Local Storage and Collections

Will save user selcted Places (that they want to see weather for) to local storage.

  ```javascript
  var PlacesCollection = Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage('Places'),
    model: PlaceModel
  });
  ```

For example, let's say two Places are added to the Places collection:

  ```javascript
  debug.places.create({countryCode: 'IT', name: 'Magenta'})
  debug.places.create({countryCode: 'CA', name: 'Toronto'})
  ```

Then local storage would have a Places key with value being a comma separated list of model id's.
Then each model id would have a key and its value being the actual JSON.

  | Key                                              | Value                                                                             |
  | ------------------------------------------------ |:---------------------------------------------------------------------------------:|
  | Places                                           | 834d5cbe-fa9a-c435-50f4-8f29b41be325,863cc011-a2de-7dab-3834-dabea3a91f06         |
  | Places-834d5cbe-fa9a-c435-50f4-8f29b41be325      | {"countryCode":"IT","name":"Magenta","id":"834d5cbe-fa9a-c435-50f4-8f29b41be325"} |
  | Places-863cc011-a2de-7dab-3834-dabea3a91f06      | {"countryCode":"CA","name":"Toronto","id":"863cc011-a2de-7dab-3834-dabea3a91f06"} |



