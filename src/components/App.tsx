import React from 'react';
import { connect } from 'react-redux'
import * as O from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';
import { AppState } from '../redux/AppState';
import NoText from './NoText';
import HasText from './HasText';

interface AppProps {
  appState: AppState;
}

const App = ({ appState }: AppProps) => pipe(
  appState.state,
  O.map(text => (
    <HasText
      text={text}
    />
  )),
  O.getOrElse(() => (
    <NoText />
  ))
);

const mapStateToProps = (appState: AppState): AppProps => ({ appState })

export default connect(mapStateToProps)(App);
