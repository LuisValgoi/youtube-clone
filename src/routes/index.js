import React from "react";
import { Route, Redirect } from "react-router-dom";

import { CONSTANTS as RouteConstants } from "./path";
import Subscription from "../pages/Subscription";

const Routes = () => {
  return (
    <>
      <Redirect key={RouteConstants.HOME.key} from={RouteConstants.HOME.path} to={RouteConstants.SUBSCRIPTION.path} />
      <Route key={RouteConstants.SUBSCRIPTION.key} path={RouteConstants.SUBSCRIPTION.path} component={Subscription} exact />
    </>
  );
};

export default Routes;
