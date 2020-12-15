import React from "react";
import { Route, Redirect } from "react-router-dom";

import * as PathRoutes from "./path";
import Subscription from "../pages/Subscription";

export const route = (
  <>
    <Redirect key="home" from={PathRoutes.HOME} to={PathRoutes.SUBSCRIPTION} />
    <Route key="subs" path={PathRoutes.SUBSCRIPTION} component={Subscription} exact />
  </>
);
