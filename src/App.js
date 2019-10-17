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
          <Route exact path={"/"} component={Home} />
          <Route path={"/:jid/:jt"} component={Apply} />
          <Route exact path={"/admin"} component={Admin} />
        </Switch>
      </Container>
    </div>
  );
}
