import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux"
import { addSnippet } from './redux/actions'


import Index from './pages/Index'
import Edit from './pages/Edit'

class Component extends React.Component {
  createNewSnippet() {
    const { dispatch } = this.props
    dispatch(addSnippet())
  }

  render(){
    return (
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/snippets/:id/edit" component={Edit} />
        <Route exact path="/snippets/new" render={() => this.createNewSnippet()} />
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

export default connect(null, null)(Component) 