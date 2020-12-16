import React from "react";
import { Route } from "react-router-dom";

import { CONSTANTS as RouteConstants } from "./path";
import Subscription from "../pages/Subscription";

const Routes = () => {
  return (
    <>
      <Route key={RouteConstants.SUBSCRIPTIONS.key} path={RouteConstants.SUBSCRIPTIONS.path} component={Subscription} exact />
    </>
  );
};

export default Routes;
