import { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import store from 'store';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

const AllTheProviders: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
