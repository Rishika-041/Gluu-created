import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//components

import Home from "./routes/Home";
import Register from "./routes/Register";
import Attendees from "./routes/Attendees";

function App() {
  return (
    <Fragment>
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/register"
              component={Register}
            />
            <Route
              exact
              path="/attendees"
              component={Attendees}
            />
          </Switch>
        </Router>
    </Fragment>
  );
}

export default App;