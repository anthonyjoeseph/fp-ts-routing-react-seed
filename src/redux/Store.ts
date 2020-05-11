import { createStore, applyMiddleware } from 'redux'
import { Router } from 'rxjs-first-router'
import AppAction from './AppAction'
import { initialAppState, AppState } from './AppState'
import reducer from './Reducer'
import { createEpicMiddleware } from 'redux-observable';
import epic from './Epic'

const configureStore = (router: Router) => {
  const epicMiddleware = createEpicMiddleware<AppAction, AppAction, AppState>();
  let store = createStore(
    reducer(initialAppState),
    initialAppState,
    applyMiddleware(
      epicMiddleware,
    ),
  );
  epicMiddleware.run(epic(router.navigator, router.route$));

  // handle the initial route
  router.pushCurrentRoute();

  return store;
}


export default configureStore