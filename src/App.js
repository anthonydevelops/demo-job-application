import React from "react";
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Apply from "./components/Apply";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Container>
        <header>Caspio Career Page Example</header>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/:jid/:jt"}
            component={Apply}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/admin"}
            component={Admin}
          />
        </Switch>
      </Container>
    </div>
  );
}
