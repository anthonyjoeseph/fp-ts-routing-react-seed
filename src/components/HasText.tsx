import React from 'react';
import { useDispatch } from 'react-redux';
import AppAction from '../redux/AppAction';
import { AppRoute } from '../redux/AppRoute';

const HasText = ({
  text,
}: {
  text: string;
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      {text}
      <br/>
      <button
        onClick={() => {
          dispatch(AppAction.as.Navigate({
            route: AppRoute.as.Landing({ value: {} }),
          }));
        }}
      >
        hide
      </button>
    </div>
  );
}

export default HasText;
