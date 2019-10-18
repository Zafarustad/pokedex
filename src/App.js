import React, { Component } from "react";
import "./App.css";
import Pokelist from "./Components/Pokelist";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PokeDetail from "./Components/PokeDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Pokelist} />
          <Route path="/:pokemon" component={PokeDetail} />
        </Switch>
      </Router>
    );
  }
}

export default App;
