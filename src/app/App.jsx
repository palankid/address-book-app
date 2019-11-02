import React from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter, Route, Switch } from 'react-router-dom';

import routes, { routeNames } from '../config/routes.config';
import NotFound from "../routes/NotFound";

const App = () => {
  const routeComponents = routes.map((route) => (
    <Route
      key={route.path}
      {...route}
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
