import React from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from './asyncComponent';

export function RouteWithSubRoutes(route) {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      component={props => (
        // pass the sub-routes down to keep nesting
        <route.component  {...props} routes={route.routes} />
      )}
    />
  );
}

export const routes = [
  {
    path:'/Indexes',
    component: asyncComponent((props) => import("../components/Indexes")),
  }
];