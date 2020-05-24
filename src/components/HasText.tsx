import React from 'react';
import { AppRoute, format } from '../redux/AppRoute';
import { router } from 'index';

const HasText = ({
  text,
}: {
  text: string;
}) => {
  return (
    <div>
      {text}
      <br/>
      <button
        onClick={() => {
          router.navigator.push(
            format(
              AppRoute.as.Landing({ value: {} })
            )
          );
        }}
      >
        hide
      </button>
    </div>
  );
}

export default HasText;
