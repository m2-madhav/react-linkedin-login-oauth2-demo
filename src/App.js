import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { LinkedInCallback } from "react-linkedin-login-oauth2";
import LinkedInPage from "./LinkedInPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/linkedin" component={LinkedInCallback} />
        <Route path="/" component={LinkedInPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
