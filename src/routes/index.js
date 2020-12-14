import React from "react";

import { Route, Redirect } from "react-router-dom";
import * as PathRoutes from "./path";

import Subscription from "../pages/Subscription";

const Routes = () => {
  return (
    <>
      <Redirect from={PathRoutes.HOME} to={PathRoutes.SUBSCRIPTION} />
      <Route path={PathRoutes.SUBSCRIPTION} to={Subscription} />
    </>
  );
};

export default Routes;
