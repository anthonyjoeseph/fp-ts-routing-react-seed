# Motivation

Typesafe & mockable routing in react

The confluence of [fp-ts-routing](https://github.com/gcanti/fp-ts-routing), [redux-observable](https://redux-observable.js.org/) and [redux-first-router](https://github.com/faceyspacey/redux-first-router)

# Implementation

Uses [morphic-ts-routing](https://github.com/anthonyjoeseph/morphic-ts-routing) to reduce boilerplate

Uses [rxjs-first-router](https://github.com/anthonyjoeseph/rxjs-first-router) for simplicity, flexibility and mockability

# Functionality

[Live site](http://intercepting-example-router.s3-website-us-east-1.amazonaws.com/)

Try reloading the page at the '/show' route

### Explanation

This repo models a web app with the following rules:
  - At the '/' route, it renders a 'show' button that reroutes to '/show'
  - At the '/show' route, it renders a 'hide' button that reroutes to '/'.
    - if '/show' was routed from the browser, it will display the text 'from route'
    - if '/show' was routed from the 'show' button, it will display the text 'from button'
  - it redirects any unrecognized route to '/'