import * as O from 'fp-ts/lib/Option';
import React from 'react';
import { useDispatch } from 'react-redux';
import AppAction from '../redux/AppAction';
import { AppRoute } from '../redux/AppRoute';

const NoText = () => {
  const dispatch = useDispatch();
  return (
    <div>
      landing
      <br/>
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
        go to route
      </button>
    </div>
  );
}

export default NoText;
