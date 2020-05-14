import * as O from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';
import React from 'react';
import { useSelector } from 'react-redux'
import { AppState } from '../redux/AppState';
import NoText from './NoText';
import HasText from './HasText';

const App = () => pipe(
  useSelector((rootState: AppState) => rootState),
  O.map(text => (
    <HasText
      text={text}
    />
  )),
  O.getOrElse(() => (
    <NoText />
  ))
);

export default App;
