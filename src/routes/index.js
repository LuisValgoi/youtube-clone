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

  const getRoutesForSignedUsers = () => {
    return (
      <Switch>
        <Route key={RouteConstants.HOME.key} path={RouteConstants.HOME.path} component={Home} exact />
        <Route key={RouteConstants.TRENDING.key} path={RouteConstants.TRENDING.path} component={Trending} exact />
        <Route key={RouteConstants.PREMIUM.key} path={RouteConstants.PREMIUM.path} component={Premium} exact />
        <Route key={RouteConstants.SUBSCRIPTIONS.key} path={RouteConstants.SUBSCRIPTIONS.path} component={Subscription} exact />
        <Route key={RouteConstants.LIBRARY.key} path={RouteConstants.LIBRARY.path} component={Library} exact />
        <Route key={RouteConstants.HISTORY.key} path={RouteConstants.HISTORY.path} component={History} exact />
        <Route key={RouteConstants.YOUR_VIDEOS.key} path={RouteConstants.YOUR_VIDEOS.path} component={YourVideos} exact />
        <Redirect from={RouteConstants.LOGIN.path} to={RouteConstants.HOME.path} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  };

  const getRoutesForUnauthorizedUsers = () => {
    return (
      <Switch>
        <Route key={RouteConstants.LOGIN.key} path={RouteConstants.LOGIN.path} component={Login} exact />
        <Route key={RouteConstants.TRENDING.key} path={RouteConstants.TRENDING.path} component={Trending} exact />
        <Route key={RouteConstants.PREMIUM.key} path={RouteConstants.PREMIUM.path} component={Premium} exact />
        <Redirect from={RouteConstants.HOME.path} to={RouteConstants.LOGIN.path} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  };

  return <>{signed ? getRoutesForSignedUsers() : getRoutesForUnauthorizedUsers()}</>;
};

export default Routes;
