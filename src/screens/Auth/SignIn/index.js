import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Grid,
  Box,
  InputAdornment,
  IconButton,
  Button,
  Typography,
  CircularProgress,
  Hidden
} from "@material-ui/core";
import mealIllustration from "~/assets/images/meal-illustration.svg";
import { signin } from "~/services/auth";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isAuthenticated } from "~/services/auth";

import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    if (isAuthenticated()) history.push("/");
  }, []);

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = e => {
    e.preventDefault();
    setValues({ ...values, showPassword: !values.showPassword });
  };

  // const handleMouseDownPassword = event => {
  // };

  const login = async e => {
    e.preventDefault();
    await signin(fakeToken);
  };

  return (
    <div className={classes.loginContainer}>
      <Container
        classes={{
          root: classes.container
        }}
        maxWidth="lg"
      >
        <Box className={classes.box} bgcolor="#FAFAFA">
          <Grid container>
            <Hidden xsDown>
              <Grid className={classes.gridImage} item xs={12} sm={6}>
                <img className={classes.image} src={mealIllustration} />
              </Grid>
            </Hidden>
            <Grid className={classes.gridTextFields} item xs={12} sm={6}>
              <Box mb={3}>
                <Typography align="center" variant="h4" gutterBottom>
                  OneS Meal
                </Typography>
                <Typography align="center" variant="h5" gutterBottom>
                  Bem-vindo(a) de volta!
                </Typography>
              </Box>

              <form style={{ display: "grid" }}>
                <TextField
                  className={classes.textField}
                  value={values.email}
                  onChange={handleChange("email")}
                  type="email"
                  id="outlined-email"
                  label="E-Mail"
                  variant="outlined"
                />

                <TextField
                  className={classes.textField}
                  id="outlined-password"
                  label="Senha"
                  variant="outlined"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={e => handleClickShowPassword(e)}
                          // onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />

                <div className={classes.wrapper}>
                  <Button
                    data-testid="submitSignIn"
                    type="submit"
                    onClick={e => login(e)}
                    className={classes.paddingTop1_5}
                    variant="contained"
                    color="primary"
                    fullWidth={true}
                  >
                    ENTRAR
                  </Button>
                  {false && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default SignIn;
