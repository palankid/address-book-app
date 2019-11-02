import Details from '../routes/Details';
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
    component: Details
  },
  {
    path: routeNames.settings,
    exact: true,
    component: Settings,
  },
  {
    path: routeNames.rest,
    component: NotFound
  }
];

export default routes;
