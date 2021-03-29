import React from "react";
import AppBar from './appbar/AppBar'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <Router>
      <AppBar/>
    </Router>

  )
};

export default Home;
