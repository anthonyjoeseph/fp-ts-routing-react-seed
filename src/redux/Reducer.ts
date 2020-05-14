import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import { Reducer, Action } from "redux";
import AppAction from "./AppAction";
import { AppState } from "./AppState";

const reducerWithInitialState = <S, A extends Action>(
  reducer: (action: A, state: S) => S | undefined
) => (
  initialState: S
): Reducer<S, A> => (nullableState, action) => {
  const oldState = nullableState || initialState;
  const newState = reducer(action, oldState);
  if (newState) return newState;
  return oldState;
}

const reducer = reducerWithInitialState<AppState, AppAction>(
  AppAction.match<AppState | undefined>({
    SetText: ({ text }) => pipe(
      O.fromNullable(text),
      O.getOrElse((): AppState | undefined => undefined),
    ),
    default: () => undefined
  })
);

export default reducer;
