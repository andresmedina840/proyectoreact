import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useState } from "react";
//import useStyles from "./configUseStyles";
import "../assets/css/login.css";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { loginAction } from "./redux/actions/mainActions";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
}));

const FormularioLogin = () => {
  
  const dispatch = useDispatch();

  const classes = useStyles();
  const [values, setValues] = useState({
    usuario: "",
    password: ""
  });

  const handleChange =  e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };



  //cuando se autentica el usuario
  const LoginSuccess = e => {
    e.preventDefault();


    // validacion autenticacion 
      dispatch(loginAction(values.usuario))
    // no existen errores

    // ingreso a la aplicación exitosa
    //history.push('/home')
    const data = {
         usuario: values.usuario,
         password: values.password
       }
       axios.post('http://localhost:8000/login', data).then(
         res => {
           console.log(res)
         }
       ).catch (
         err => {
           console.log(err)
         }
       )    
  }


  
  return (
    <div className="App">
      <form onSubmit={LoginSuccess}>
        <Grid container style={{ minHeight: "40vh" }}>
          <Grid container justify="center">
            <Grid
              container
              item
              xs={12}
              sm={6}
              alignItems="center"
              direction="column"
              justify="space-between"
              style={{ padding: 10 }}
            >
              <Paper className={classes.paper}>
              <div />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: 400,
                  minWidth: 300,
                }}
              >
                <TextField
                  required
                  name="usuario"
                  
                  label="Usuario"
                  value={values.usuario}
                  onChange={ e => handleChange(e) }
                  margin="normal"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />

                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    required
                    name="password"
                    
                    type="password"
                    value={values.password}
                    onChange={ e => handleChange(e) }                  
                    labelWidth={100}
                  />
                </FormControl>

                <div style={{ height: 20 }} />
                <Button onClick={LoginSuccess} color="primary" variant="contained">
                  Iniciar Sesion
                </Button>
              </div>
              <div />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormularioLogin;
