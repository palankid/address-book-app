import React from 'react';

const UsersView = React.lazy(() => import('../routes/UsersView'));
const Settings = React.lazy(() => import('../routes/Settings'));
const NotFound = React.lazy(() => import('../routes/NotFound'));

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
