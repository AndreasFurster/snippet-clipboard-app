import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Base from './components/layout/Base'


export default class Component extends React.Component {
  render() {
    return (
      <Router>
        <Base/>
      </Router>
    );
  }
}