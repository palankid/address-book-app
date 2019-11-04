import UsersView from '../routes/UsersView';
import Settings from '../routes/Settings';
import NotFound from "../routes/NotFound";

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
