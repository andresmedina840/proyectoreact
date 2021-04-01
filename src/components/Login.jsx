import FooterLogin from "./FooterLogin";
import FormularioLogin from "./FormularioLogin";
import HeaderLogin from "./HeaderLogin";

import {BrowserRouter as Router} from 'react-router-dom'

const Login = () => {
  return (
    <Router>
      <HeaderLogin />
      <FormularioLogin />
      <FooterLogin />
    </Router>
  );
};

export default Login;
