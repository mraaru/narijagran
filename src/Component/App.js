import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Hercare from "./Hercare/index"
import Home from "./Home";
import News from "./News";
import Page from "./Page";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/page" component={Page} />
        <Route exact path="/hercare" component={Hercare} />
        <Route exact path="/herright" component={Hercare} />
        <Route exact path="/herstory" component={Hercare} />
        <Route exact path="/herhomme" component={Hercare} />
      
      </Switch>
    </>
  );
}

export default App;
