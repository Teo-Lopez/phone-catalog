import React from "react";
import logo from "./logo.svg";
import Home from "./screens/home/Home";
import Card from "./components/phoneCard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/:id" render={match => <Card {...match}></Card>}></Route>
    </Switch>
  );
}

export default App;
