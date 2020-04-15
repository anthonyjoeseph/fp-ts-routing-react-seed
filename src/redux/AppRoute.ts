import * as R from 'fp-ts-routing';
import { routingFromMatches2 } from 'morphic-ts-routing'
import { ADTType } from 'morphic-ts/lib/adt/index'

const {
  parser,
  formatter,
  adt: AppRoute
} = routingFromMatches2(
  ['Landing', R.end],
  ['Show', R.lit('show').then(R.end)],
);
type AppRoute = ADTType<typeof AppRoute>

export {
  parser,
  formatter,
  AppRoute,
}
