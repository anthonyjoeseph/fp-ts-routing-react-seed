import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import { Reducer } from "redux";
import AppAction from "./AppAction";
import { AppState } from "./AppState";
import { AppRoute } from './AppRoute';

const reducer = (
  initialState: AppState,
): Reducer<AppState, AppAction> => (
  state,
  action,
): AppState => {
  if (!state) return initialState;
  return AppAction.match({
    OnRoute: ({ route }): AppState => AppRoute.match({
      Show: () => pipe(
        state.state,
        O.map((state): AppState => ({ state: O.some(state) })),
        O.getOrElse((): AppState => ({ state: O.some('From route') })),
      ),  
      default: () => ({ state: O.none }),
    })(route),
    Navigate: ({ text }): AppState => pipe(
      O.fromNullable(text),
      O.map((text) => ({ state: O.some(text) })),
      O.getOrElse(() => state),
    ),
    default: (): AppState => state
  })(action)
};

export default reducer;
