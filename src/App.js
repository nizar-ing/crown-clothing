import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router";

import "./App.css";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
