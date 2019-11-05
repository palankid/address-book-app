import React, {Suspense} from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter, Route, Switch } from 'react-router-dom';

import routes, { routeNames } from '../config/routes.config';

import LoadingMessage from '../components/LoadingMessage';

/**
 * Application component with lazy loaded components
 * @returns {Object<Node>} React node
 */
const App = () => {
  const routeComponents = routes.map((route) => (
    <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      render={() => <route.component />}
    />
  ));

  /** Fallback component to display when a component is not loaded yet and can't be displayed */
  const loadingMessage = <LoadingMessage message="Loading modules" />;

  return (
    <HashRouter basename={routeNames.root}>
      <Suspense
        fallback={loadingMessage}>
        <Switch>
          {routeComponents}
        </Switch>
      </Suspense>
    </HashRouter>
  )
};

export default hot(App);
