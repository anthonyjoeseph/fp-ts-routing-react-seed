import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { createMockRouter, Router } from 'rxjs-first-router';
import AppAction from '../redux/AppAction';
import { AppState } from '../redux/AppState';
import configureStore from '../redux/Store';
import App from '../components/App';

describe('Whole App', () => {
  it('\'/show\' renders \'from route\' or \'from button\' appropriately', () => {
    const router: Router = createMockRouter();

    // set the initial route
    router.navigator.push('/show');

    const routeHistory: string[] = [];
    router.route$.subscribe((r: string) => routeHistory.push(r));
    
    const store: Store<AppState, AppAction> = configureStore(router);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(routeHistory[0] === '/show').toBeTruthy();
    const fromRouteText: HTMLElement = screen.getByText(/from route/i);
    expect(fromRouteText).toBeInTheDocument();

    const goToLandingButton: HTMLElement = screen.getByText(/go to landing/i);
    fireEvent.click(goToLandingButton);
    expect(routeHistory[1] === '/').toBeTruthy();

    const landingText: HTMLElement = screen.getByText(/landing/i);
    expect(landingText).toBeInTheDocument();

    const goToRouteButton: HTMLElement = screen.getByText(/go to route/i);
    fireEvent.click(goToRouteButton);
    expect(routeHistory[2] === '/show').toBeTruthy();

    const fromButtonText: HTMLElement = screen.getByText(/from button/i);
    expect(fromButtonText).toBeInTheDocument();
  });
})