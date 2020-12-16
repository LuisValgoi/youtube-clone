# Objective

The objective of this repo is to reproduce the youtube interface.

# Overview

The idea here is to use the newest concepts and stack learning in the last weeks to reproduce in a real word scenario.

The app should be composed of a complex sidebar and the routing for each page.

# Stacks & New Concepts

We shuold be using the `atomic-design-pattern` since we need to customize and clone the app again;

We should be using the `Single SPA` as the `microfrontends` type of architecture;

We should be using `context-api` as state management;

We should be using the `styled-components` to style the app;

We should be using the `fontawesome` as icon library;

We should be using also the `prop-types` between the components arguments;

We should be using the `service` layer to replicate the backend w/ mocking the response as a SSR;

We should be using the `transform` and `transition` css properties;

# Microservice Conversion

```js
  npm install single-spa
  npm install single-spa-react
  npm install --save-dev webpack
  npm install --save-dev webpack-cli
  npm install --save-dev webpack-dev-server
  npm install --save-dev clean-webpack-plugin
  npm install --save-dev babel-loader
  npm install --save-dev @babel/core
  npm install --save-dev @babel/preset-react
  npm install --save-dev css-loader
  npm install --save-dev file-loader
  npm install --save-dev html-loader
  npm install --save-dev style-loader
```
