import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { getConfiguration } from 'api';
import { AxiosResponse } from 'axios';

import './App.css';

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
    getConfiguration()
      .then((response: AxiosResponse) => {
        const config = response.data;

        window.config = config;
        setConfig(config);
      })
      .catch(() => {
        console.error('getConfiguration error');
      });
  }, []);

  if (config === null) {
    return <div>Loading configuration...</div>;
  }

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
