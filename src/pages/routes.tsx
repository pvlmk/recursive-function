import * as React from "react";

import Home from "./Home/Home";
import Article from "./Article/Article";
import Contents from "./Contents/Contents";
import FourZeroFour from "./FourZeroFour/FourZeroFour";

import { Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Article} path="/articles/:id" />
      <Route component={Contents} path="/contents" />
      <Route component={FourZeroFour} path="*" />
    </Switch>
  );
}

export default Routes;
