import React, { Dispatch } from 'react';
import { Navigation } from 'fp-ts-routing-redux';
import { connect } from 'react-redux';
import AppAction from '../redux/AppAction';
import { AppRoute } from '../redux/AppRoute';

const NoText = ({
  goToShow,
}: {
  goToShow: () => void;
}) => (
  <div>
    landing
    <br/>
    <button
      onClick={goToShow}
    >
      go to route
    </button>
  </div>
);

export default connect(
  undefined,
  (dispatch: Dispatch<AppAction>) => ({
    goToShow: () => dispatch(AppAction.as.Navigate({
      navigation: Navigation.push(
        AppRoute.as.Show({ value: {} }),
      ),
      text: 'from button',
    }))
  }),
)(NoText);
