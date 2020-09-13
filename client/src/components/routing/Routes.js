import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";
import LaunchSuccess from "../launches/LaunchSuccess";
import LaunchLandSuccess from "../launches/LaunchLandSuccess";
import LaunchesYear from "../launches/LaunchesYear";
import NotFound from "../utils/NotFound";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/success/:success" component={LaunchSuccess} />
      <Route
        exact
        path="/launch-land-success/:land"
        component={LaunchLandSuccess}
      />
      <Route exact path="/year/:year" component={LaunchesYear} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
