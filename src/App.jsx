import Login from "./components/Login";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Redux
import { Provider } from 'react-redux';
import store from './components/redux/store';

function App() {
  return (
    <Router>
      <Provider store={store} >
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
