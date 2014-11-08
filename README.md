<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [spa-tuts](#spa-tuts)
  - [Project Analysis](#project-analysis)
    - [Models](#models)
    - [Views and Templates](#views-and-templates)
    - [Application Logic (aka Controller)](#application-logic-aka-controller)
      - [Routes](#routes)

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
  "backgroundColor" : ""
  "celsius" : true
  "welcomeMessage" : ""

Place Model (data for each place user would like to see weather for, will have many of these)
  "country"
  "name"
  "displayName"
  "long"
  "lat"

Since we'll have many places, will need a *collection*, which are handled differently in different frameworks.

Will be using [wunderground](http://www.wunderground.com/api) API for weather data.

Will also be using HTML5 [Local Storage](https://code.tutsplus.com/tutorials/quick-tip-learning-about-html5-local-storage--net-10837)

### Views and Templates

How to break up application dispay components and structure code? Are there repeating visual patterns that could be templated?

  Place View (small or expanded) - add X to close
  Place Data View
  Page View - header?
  Settings View
  Add Place View
  Error or Alert view

### Application Logic (aka Controller)

  Add a place
  Remove a place
  Open Settings
  Close Settings
  Retrieve weather data
  Save place data
  Save settings data
  Open place detail view

#### Routes

Support deep linking to any particular place, for example `appurl.com/#/place/sydney`