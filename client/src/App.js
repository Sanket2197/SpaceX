import React from "react";

//Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";
import Filters from "./components/launches/LaunchFilters";
// Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <div className="bg-container">
            <h1>SpaceX Launch Programs</h1>
            <div className="row">
              <Filters />
              <div className="content">
                <Route component={Routes} />
              </div>
            </div>
            <h5>Developed by : Kumar Sanket</h5>
          </div>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
