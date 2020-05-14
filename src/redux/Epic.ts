import * as O from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';
import { flow } from 'fp-ts/lib/function';
import * as r from 'rxjs';
import * as ro from 'rxjs/operators';
import { Epic } from 'redux-observable';
import { Navigator } from 'rxjs-first-router';
import { parser, AppRoute, formatter } from './AppRoute';
import AppAction, { Navigate } from './AppAction';
import { AppState } from './AppState';

const epic = (
  navigator: Navigator,
  route$: r.Observable<string>
): Epic<AppAction, AppAction, AppState> => (action$, state$) => {
  const navigationHandler = action$
    .pipe(
      ro.filter<AppAction, Navigate>(AppAction.is.Navigate),
      ro.map(n => n.route),
      ro.map(flow(
        formatter,
        navigator.push,
      )),
    );
  const routeHandler = route$
    .pipe(
      ro.map(parser),
      ro.map(AppRoute.match({
        Show: () => pipe(
          state$.value,
          O.map(() => undefined),
          O.getOrElse((): AppAction | undefined => AppAction.as.SetText({
            text: O.some('from route'),
          })),
        ),
        Landing: () => AppAction.as.SetText({
          text: O.none,
        }),
        NotFound: () => AppAction.as.Navigate({
          route: AppRoute.as.Landing({ value: {} }),
        }),
      })),
    );
  return r.merge(navigationHandler, routeHandler)
    .pipe(
      ro.filter<AppAction | void | undefined, AppAction>(
        (action): action is AppAction => action != null,
      )
    );
};

export default epic;