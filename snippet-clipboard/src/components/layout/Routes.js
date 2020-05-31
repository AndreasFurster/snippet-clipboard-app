import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import Home from '../../pages/Home'
import Docs from '../../pages/Index'

export default function() {
  return (
    <Switch>
      <Route path="/index">
        <Docs />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

function Users() {
  return <h2>Users</h2>;
}