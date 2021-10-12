import store from 'store';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import Configuration from 'Configuration';
import Routes from 'Routes';

declare global {
  interface Window {
    config: any;
  }
}

function App() {
  return (
    <Configuration>
      <Provider store={store}>
        <HelmetProvider>
          <Routes />
        </HelmetProvider>
      </Provider>
    </Configuration>
  );
}

export default App;
