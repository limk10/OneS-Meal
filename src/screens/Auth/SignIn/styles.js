import styled from "styled-components";
import { makeStyles } from "@material-ui/core";

export const Container = styled.div``;

const useStyles = makeStyles(theme => ({
  flexGrow: {
    flexGrow: 1
  },
  container: {
    padding: 0
  },
  loginContainer: {
    background:
      "linear-gradient(0deg, rgba(73,72,109, 0.8), rgba(89,88,166, 0.8))"
  },
  box: {
    display: "flex",
    height: `auto`,
    minHeight: `100vh`
  },
  gridImage: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center"
  },
  gridTextFields: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "column",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },
  textField: {
    paddingBottom: theme.spacing(2)
  },
  gridForgotPassword: {
    textAlign: "end",
    alignSelf: "center"
  },
  paddingTop1_5: {
    marginTop: theme.spacing(1.5)
  },
  paddingTop2_5: {
    marginTop: theme.spacing(2.5)
  },
  checkboxForgotPass: {
    paddingLeft: 0
  },
  image: {
    width: `75%`,
    height: `auto`
  },
  buttonProgress: {
    color: "green",
    position: "absolute",
    top: "60%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },
  wrapper: {
    position: "relative"
  }
}));

export { useStyles };
