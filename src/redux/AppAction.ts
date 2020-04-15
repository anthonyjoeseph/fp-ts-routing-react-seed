import { makeADT, ADTType, ofType } from 'morphic-ts/lib/adt/index'
import { Navigation } from 'fp-ts-routing-redux';
import { AppRoute } from './AppRoute';

const AppAction = makeADT('type')({
  OnRoute: ofType<{ type: 'OnRoute'; route: AppRoute }>(),
  Navigate: ofType<{ type: 'Navigate'; navigation: Navigation<AppRoute>; text?: string }>(),
});
type AppAction = ADTType<typeof AppAction>

export default AppAction;
