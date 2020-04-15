import { createStore, applyMiddleware } from 'redux'
import {
  router, Navigation
} from 'fp-ts-routing-redux'
import { parser, formatter, AppRoute } from './AppRoute'
import AppAction from './AppAction'
import { initialAppState } from './AppState'
import reducer from './Reducer'

const configureStore = () => {

  const {
    middleware,
    dispatchFirstRoute,
  } = router(
    parser,
    formatter,
    (route) => AppRoute.is.NotFound(route)
    ? AppAction.of.Navigate({ navigation: Navigation.replace(AppRoute.as.Landing({ value: {} })), text: undefined })
    : AppAction.of.OnRoute({ route }),
    AppAction.match({
      Navigate: ({ navigation }) => navigation,
      default: () => undefined,
    }),
  );

  let store = createStore(
    reducer(initialAppState),
    initialAppState,
    applyMiddleware(
      middleware,
    ),
  );

  dispatchFirstRoute(store);

  return store;
}


export default configureStore