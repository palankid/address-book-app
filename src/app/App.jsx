import React, {Suspense} from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter, Route, Switch } from 'react-router-dom';

import routes, { routeNames } from '../config/routes.config';

import LoadingModule from './LoadingModule';

const App = () => {
  const routeComponents = routes.map((route) => (
    <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      render={() => <route.component />}
    />
  ));

  return (
    <HashRouter basename={routeNames.root}>
      <Suspense
        fallback={<LoadingModule />}>
        <Switch>
          {routeComponents}
        </Switch>
      </Suspense>
    </HashRouter>
  )
};

export default hot(App);
