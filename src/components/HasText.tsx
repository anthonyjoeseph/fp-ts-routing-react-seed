import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import AppAction from '../redux/AppAction';
import { Navigation } from 'fp-ts-routing-redux';
import { AppRoute } from '../redux/AppRoute';

const HasText = ({
  text,
  goToLanding,
}: {
  text: string;
  goToLanding: () => void;
}) => (
  <div>
    {text}
    <br/>
    <button
      onClick={goToLanding}
    >
      go to landing
    </button>
  </div>
);


export default connect(
  undefined,
  (dispatch: Dispatch<AppAction>) => ({
    goToLanding: () => dispatch(AppAction.as.Navigate({
      navigation: Navigation.push(
        AppRoute.as.Landing({ value: {} }),
      ),
      text: undefined,
    })),
  }),
)(HasText);
