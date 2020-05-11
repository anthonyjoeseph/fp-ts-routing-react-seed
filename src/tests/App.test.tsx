import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/App';
import { createMockRouter } from 'rxjs-first-router';
import configureStore from 'redux/Store';
import { Provider } from 'react-redux';

describe('App Component', () => {
  it('renders learn react link', () => {
    const router = createMockRouter('/');
    const routeHistory: string[] = [];
    const routeObs = router.route$;
    routeObs.subscribe(r => routeHistory.push(r));
    
    const store = configureStore(router);
    expect(routeHistory[0] === '/').toBeTruthy();
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const buttonElement = screen.getByText(/go to route/i);
    fireEvent.click(buttonElement);
    expect(routeHistory[1] === '/show').toBeTruthy();

    const textElement = screen.getByText(/from button/i);
    expect(textElement).toBeInTheDocument();

    const buttonElementTwo = screen.getByText(/go to landing/i);
    fireEvent.click(buttonElementTwo);
    expect(routeHistory[2] === '/').toBeTruthy();
  });
})