import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from 'pages/About';
import Home from 'pages/Home';
import Movie from 'pages/Movie';

import { getConfiguration } from 'api';
import { AxiosResponse } from 'axios';

import './App.css';

declare global {
  interface Window {
    config: any;
  }
}

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
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/movie/:id">
            <Movie />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
