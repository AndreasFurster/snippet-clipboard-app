import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Base from './components/layout/Base'

export default function App() {
  return (
    <Router>
      <Base/>
    </Router>
  );
}