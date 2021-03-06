import React from "react";
import Routes from "~/routes";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import { Container, CssBaseline, Toolbar } from "@material-ui/core";
import { isAuthenticated } from "~/services/auth";
import Header from "~/components/Header";
import GlobalStyle from "~/assets/css/global.js";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5958A6"
    }
  }
});

const App = () => {
  if (!isAuthenticated())
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    );

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <div style={{ paddingBottom: 50, backgroundColor: "#f5f5f5" }}>
          <Container style={{ backgrondColor: "red" }} maxWidth="lg">
            <GlobalStyle />
            <Routes />
          </Container>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
