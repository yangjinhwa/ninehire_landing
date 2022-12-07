import React from 'react';
import { Switch, useLocation, Route } from 'react-router';
import loadable from '@loadable/component';
import { rootRouteList } from './routePath';

interface ILocation {
  from: {
    pathname: string;
  };
  background: any;
}

const Home = loadable(() => import('@src/pages/Home'));

function RootRoute() {
  const location = useLocation<ILocation>();

  return (
    <>
      <Switch location={location}>
        <Route exact path="/" component={Home} />
        {rootRouteList.map((routeList, index) => {
          const { path, component } = routeList;
          return (
            <Route key={index} path={path}>
              {component}
            </Route>
          );
        })}
      </Switch>
    </>
  );
}

export default RootRoute;
