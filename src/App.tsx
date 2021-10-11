import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { getConfiguration } from 'api';
import { AxiosResponse } from 'axios';

declare global {
  interface Window {
    config: any;
  }
}

const About = lazy(() => import('./pages/About'));
const Movie = lazy(() => import('./pages/Movie'));
const MyList = lazy(() => import('./pages/MyList'));
const Home = lazy(() => import('./pages/Home'));
const NoMatch = lazy(() => import('./pages/NoMatch'));

function App() {
  const [config, setConfig] = useState<object | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse = await getConfiguration();
        const config = response.data;

        window.config = config;
        setConfig(config);
      } catch (error) {
        console.error('getConfiguration error');
      }
    };

    fetchData();
  }, []);

  if (config === null) {
    return <div>Loading configuration...</div>;
  }

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/movie/:id">
            <Movie />
          </Route>
          <Route exact path="/my-list">
            <MyList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
