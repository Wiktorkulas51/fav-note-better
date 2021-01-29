import React from "react";
import MainTemplate from "../templates/MainTemplate";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Notes from "./notes";
import Aritcles from "./aritcles";
import Twitters from "./twitters";
import DetailsPage from "./DetailsPage";
import { routes } from "../routes/index";

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
        <Route exact path={routes.notes} component={Notes} />
        <Route path={routes.note} component={DetailsPage} />
        <Route exact path={routes.articles} component={Aritcles} />
        <Route path={routes.article} component={DetailsPage} />
        <Route exact path={routes.twitters} component={Twitters} />
        <Route path={routes.twitter} component={DetailsPage} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
