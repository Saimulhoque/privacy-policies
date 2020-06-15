import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import HomePage from "./components/home";
import SiteManagerPage from "./components/siteManager";
import AccountManagerPage from "./components/accountManager";

function App(props) {
  return (
    <div>
      <Switch>
        <Route path={ROUTES.SITE_MANAGER_PAGE} component={SiteManagerPage} />
        <Route
          path={ROUTES.ACCOUNT_MANAGER_PAGE}
          component={AccountManagerPage}
        />
        <Route path={ROUTES.HOMEPAGE} component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
