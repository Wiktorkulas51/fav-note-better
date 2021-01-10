import React from "react";
import MainTemplate from "../templates/MainTemplate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Notes from "./notes";
import Aritcles from "./aritcles";
import Twitters from "./twitters";

function Root() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route exact path="/articles" component={Aritcles} />
          <Route exact path="/twitters" component={Twitters} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default Root;
