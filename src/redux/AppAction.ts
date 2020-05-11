import * as O from 'fp-ts/lib/Option';
import { makeADT, ADTType, ofType } from 'morphic-ts/lib/adt/index'
import { AppRoute } from './AppRoute';

const Navigate = ofType<{ type: 'Navigate'; route: AppRoute }>();
export type Navigate = typeof Navigate._TD

const SetText = ofType<{ type: 'SetText'; text: O.Option<string> }>();
export type SetText = typeof SetText._TD

const AppAction = makeADT('type')({
  Navigate,
  SetText,
});
type AppAction = ADTType<typeof AppAction>
export default AppAction;
