import React from "react";
import Landing from "./Landing";
import CardGenerator from "./CardGenerator";
import { Switch, Route } from "react-router-dom";
import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/cardgenerator" component={CardGenerator} />
      </Switch>
    );
  }
}

export default App;
