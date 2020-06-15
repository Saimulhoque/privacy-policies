import React from "react";
import "./App.css";

import { Route, Link, HashRouter } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import HomePage from "./components/home";
import SiteManagerPage from "./components/siteManager";
import AccountManagerPage from "./components/accountManager";
import SultanTrackerSNPage from "./components/sultanTrackerSN";

function App(props) {
  return (
    <div>
      <HashRouter basename="/">
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/site-manager" component={SiteManagerPage} />
          <Route path="/account-manager" component={AccountManagerPage} />
          <Route
            path={ROUTES.SULTAN_TRACKER_SN}
            component={SultanTrackerSNPage}
          />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
