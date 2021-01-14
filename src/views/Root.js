import React from "react";
import MainTemplate from "../templates/MainTemplate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Notes from "./notes";
import Aritcles from "./aritcles";
import Twitters from "./twitters";

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/articles" component={Aritcles} />
        <Route path="/twitters" component={Twitters} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
