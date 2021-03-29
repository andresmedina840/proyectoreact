import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";
//import useStyles from "./configUseStyles";
import "../assets/css/login.css";

const FormularioLogin = () => {
  //const classes = useStyles();

  const [values, setValues] = useState({
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <form>
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
                  id="usuario"
                  label="Usuario"
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
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={100}
                  />
                </FormControl>

                <div style={{ height: 20 }} />
                <Button color="primary" variant="contained">
                  Iniciar Sesion
                </Button>
              </div>
              <div />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormularioLogin;
