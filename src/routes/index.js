import React from "react";
import { Route } from "react-router-dom";

import { CONSTANTS as RouteConstants } from "./path";

import Home from "../pages/Home";
import Trending from "../pages/Trending";
import Library from "../pages/Library";
import Subscription from "../pages/Subscription";
import History from "../pages/History";
import YourVideos from "../pages/YourVideos";

const Routes = () => {
  return (
    <>
      <Route key={RouteConstants.HOME.key} path={RouteConstants.HOME.path} component={Home} exact />
      <Route key={RouteConstants.TRENDING.key} path={RouteConstants.TRENDING.path} component={Trending} exact />
      <Route key={RouteConstants.SUBSCRIPTIONS.key} path={RouteConstants.SUBSCRIPTIONS.path} component={Subscription} exact />
      <Route key={RouteConstants.LIBRARY.key} path={RouteConstants.LIBRARY.path} component={Library} exact />
      <Route key={RouteConstants.HISTORY.key} path={RouteConstants.HISTORY.path} component={History} exact />
      <Route key={RouteConstants.YOUR_VIDEOS.key} path={RouteConstants.YOUR_VIDEOS.path} component={YourVideos} exact />
    </>
  );
};

export default Routes;
