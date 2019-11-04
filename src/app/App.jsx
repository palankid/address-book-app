import React from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter, Route, Switch } from 'react-router-dom';

import routes, { routeNames } from '../config/routes.config';

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
      <Switch>
        {routeComponents}
      </Switch>
    </HashRouter>
  )
};

export default hot(App);
