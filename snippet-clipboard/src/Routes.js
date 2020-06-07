import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Index from './pages/Index'
import Edit from './pages/Edit'

export default class Component extends React.Component {
  render(){
    return (
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/snippets/:id/edit" component={Edit} />
        <Route exact path="/snippets">
          <Redirect to="/" />
        </Route>
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
    );
  }
}