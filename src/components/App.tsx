import { identity } from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';
import React from 'react';
import NoText from './NoText';
import HasText from './HasText';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/AppState';

const App = () => {
  const appState = useSelector<AppState, AppState>(identity);
  return pipe(
    appState,
    O.map(text => (
      <HasText
        text={text}
      />
    )),
    O.getOrElse(() => (
      <NoText />
    ))
  );
}

export default App;
