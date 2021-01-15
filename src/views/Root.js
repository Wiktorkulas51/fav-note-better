import React from "react";
import MainTemplate from "../templates/MainTemplate";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Notes from "./notes";
import Aritcles from "./aritcles";
import Twitters from "./twitters";
import DetailsPage from "./DetailsPage";

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/notes" />} />
        <Route exact path="/notes" component={Notes} />
        <Route path="/notes/:id" component={DetailsPage} />
        <Route exact path="/articles" component={Aritcles} />
        <Route path="/articles/:id" component={DetailsPage} />
        <Route exact path="/twitters" component={Twitters} />
        <Route path="/twitters/:id" component={DetailsPage} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
