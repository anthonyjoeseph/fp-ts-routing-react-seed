import * as assert from 'assert';
import * as r from 'rxjs';
import * as ro from 'rxjs/operators';
import { createMockRouter, Router } from 'rxjs-first-router';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AppAction from '../redux/AppAction';
import { AppState } from '../redux/AppState';
import configureStore from '../redux/Store';
import App from '../components/App';

describe('Whole App', () => {
  it('\'/show\' renders \'from route\' or \'from button\' appropriately', async () => {
    const router: Router = createMockRouter();
    const store: Store<AppState, AppAction> = configureStore(router);

    const closeRouter = new r.Subject();
    const routeHistory = router.route$
      .pipe(
        ro.takeUntil(closeRouter),
        ro.toArray(),
      )
      .toPromise();

    // set the initial route
    router.navigator.push('/show');
    
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const fromRouteText: HTMLElement = screen.getByText(/from route/i);
    expect(fromRouteText).toBeInTheDocument();

    const hideButton: HTMLElement = screen.getByText(/hide/i);
    fireEvent.click(hideButton);

    const showButton: HTMLElement = screen.getByText(/show/i);
    fireEvent.click(showButton);

    const fromButtonText: HTMLElement = screen.getByText(/from button/i);
    expect(fromButtonText).toBeInTheDocument();

    closeRouter.next();
    await routeHistory.then(r => assert.deepStrictEqual(r, [
      '/show', 
      '/',
      '/show',
    ]));
  });
})