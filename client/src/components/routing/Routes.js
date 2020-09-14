import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";
import LaunchesByFilters from "../launches/LaunchesByFilters";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/launches" component={LaunchesByFilters} />
    </Switch>
  );
};

export default Routes;
