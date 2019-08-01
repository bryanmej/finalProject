import React from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login";
import AllExpenses from "./components/AllExpenses";

function Router() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={AllExpenses} />
      </Switch>
    </div>
  );
}

export default Router;
