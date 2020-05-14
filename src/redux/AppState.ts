import * as O from 'fp-ts/lib/Option';

export type AppState = O.Option<string>

export const initialAppState: AppState = O.none
