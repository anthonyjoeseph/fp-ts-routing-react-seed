import * as O from 'fp-ts/lib/Option';
import React from 'react';
import { AppRoute } from 'redux/AppRoute';
import { useDispatch } from 'react-redux';
import AppAction from 'redux/AppAction';

const NoText = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(AppAction.as.SetText({
            text: O.some('from button'),
          }));
          dispatch(AppAction.as.Navigate({
            route: AppRoute.as.Show({ value: {} }),
          }));
        }}
      >
        show
      </button>
    </div>
  );
}

export default NoText;
