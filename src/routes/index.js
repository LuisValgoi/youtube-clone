import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useAuth } from "../contexts/auth";

import { CONSTANTS as RouteConstants } from "./path";

import Home from "../pages/Home";
import Trending from "../pages/Trending";
import Library from "../pages/Library";
import Subscription from "../pages/Subscription";
import History from "../pages/History";
import YourVideos from "../pages/YourVideos";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Premium from "../pages/Premium";

const Routes = () => {
  const { signed } = useAuth();

  return (
    <Switch>
      <Route key={RouteConstants.TRENDING.key} path={RouteConstants.TRENDING.path} component={Trending} exact />
      <Route key={RouteConstants.PREMIUM.key} path={RouteConstants.PREMIUM.path} component={Premium} exact />

      {signed && (
        <>
          <Redirect from={RouteConstants.LOGIN.path} to={RouteConstants.HOME.path} />
          <Route key={RouteConstants.HOME.key} path={RouteConstants.HOME.path} component={Home} exact />
          <Route key={RouteConstants.SUBSCRIPTIONS.key} path={RouteConstants.SUBSCRIPTIONS.path} component={Subscription} exact />
          <Route key={RouteConstants.LIBRARY.key} path={RouteConstants.LIBRARY.path} component={Library} exact />
          <Route key={RouteConstants.HISTORY.key} path={RouteConstants.HISTORY.path} component={History} exact />
          <Route key={RouteConstants.YOUR_VIDEOS.key} path={RouteConstants.YOUR_VIDEOS.path} component={YourVideos} exact />
        </>
      )}

      {!signed && (
        <>
          <Redirect from="*" to={RouteConstants.LOGIN.path} />
          <Route key={RouteConstants.LOGIN.key} path={RouteConstants.LOGIN.path} component={Login} exact />
        </>
      )}
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
