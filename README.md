# Approach

[fp-ts-routing](https://github.com/gcanti/fp-ts-routing) <-> [morphic-ts-routing](https://github.com/anthonyjoeseph/morphic-ts-routing) <-> [rxjs-first-router](https://github.com/anthonyjoeseph/rxjs-first-router) <-> [rxjs](https://rxjs-dev.firebaseapp.com/) <-> [redux-observable](https://redux-observable.js.org/) <-> [redux](https://redux.js.org/) <-> [react-redux](https://react-redux.js.org/) <-> [react](https://reactjs.org/)

Also [morphic-ts](https://github.com/sledorze/morphic-ts) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) and [Node.js assert](https://nodejs.org/api/assert.html)

# Benefits

- enforce route logic completeness at compile time
- async/effectful routing
  - loading indicators
  - redirects
- unit test route history

# Philosophy

Since routes are global state, they [ought to be](https://redux.js.org/faq/organizing-state#do-i-have-to-put-all-my-state-into-redux-should-i-ever-use-reacts-setstate) handled with a state manager like redux. This idea is [has precedent](https://www.freecodecamp.org/news/an-introduction-to-the-redux-first-routing-model-98926ebf53cb/)

A browser's current route can naturally be modelled as a [stream](https://rxjs-dev.firebaseapp.com/guide/observable). This idea [also has precedent](https://github.com/gcanti/elm-ts/blob/0f56e8b36fc7581aad25135ae2e5311ed5cd167a/src/Navigation.ts#L27)

[morphic-ts-routing](https://github.com/anthonyjoeseph/morphic-ts-routing) is used to reduce [fp-ts-routing](https://github.com/gcanti/fp-ts-routing)'s boilerplate

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