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