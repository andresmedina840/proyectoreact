import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/i2aut" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
