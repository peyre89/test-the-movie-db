import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const About = lazy(() => import('./pages/About'));
const Movie = lazy(() => import('./pages/Movie'));
const MyList = lazy(() => import('./pages/MyList'));
const Home = lazy(() => import('./pages/Home'));
const NoMatch = lazy(() => import('./pages/NoMatch'));

function Routes() {
  return (
    <Router>
      <Suspense fallback={null}>
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

export default Routes;
