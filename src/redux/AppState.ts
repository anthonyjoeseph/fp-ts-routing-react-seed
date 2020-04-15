import * as O from 'fp-ts/lib/Option';

export interface AppState {
  state: O.Option<string>
}

export const initialAppState: AppState = { state: O.none }
