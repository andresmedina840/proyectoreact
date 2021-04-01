import React from "react";
import AppBar from './appbar/AppBar';

import { BrowserRouter as Router} from "react-router-dom";

const Home = () => {
  return (
    <Router>
      <AppBar/>
    </Router>

  )
};

export default Home;
