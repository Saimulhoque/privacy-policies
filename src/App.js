import React from "react";
import "./App.css";

import { Route, Link, HashRouter } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import HomePage from "./components/home";
import SiteManagerPage from "./components/siteManager";
import AccountManagerPage from "./components/accountManager";

function App(props) {
  return (
    <div>
      <HashRouter basename="/">
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </HashRouter>
    </div>
  );
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default App;
