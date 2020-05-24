import * as O from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';
import * as ro from 'rxjs/operators';
import { AppState } from 'redux/AppState';
import { parse, AppRoute, format } from 'redux/AppRoute';
import { Router } from 'rxjs-first-router';

const onRoute = (
  appStateThunk: () => AppState,
  router: Router,
) => router.route$
.pipe(
  ro.map(parse),
  ro.map(AppRoute.match({
    Show: () => pipe(
      appStateThunk(),
      O.map(() => undefined),
      O.getOrElse((): AppState | undefined => O.some('from route')),
    ),
    Landing: () => O.none,
    NotFound: () => {
      router.navigator.push(format(
        AppRoute.as.Landing({ value: {} }),
      ));
      return appStateThunk();
    },
  })),
);

export default onRoute;