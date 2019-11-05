/**
 * Routes configuration
 * @module config/routes
 */

import React from 'react';

import NotFound from '../routes/NotFound';

const UsersView = React.lazy(() => import('../routes/UsersView'));
const Settings = React.lazy(() => import('../routes/Settings'));

export const routeNames = {
  rest: '*',
  root: '/',
  settings: '/settings',
};

const routes = [
  {
    path: routeNames.root,
    exact: true,
    component: UsersView
  },
  {
    path: routeNames.settings,
    component: Settings,
  },
  {
    path: routeNames.rest,
    component: NotFound
  }
];

export default routes;
