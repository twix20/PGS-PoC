import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import blue from "@material-ui/core/colors/blue";

import DefaultLayout from "./layouts/Default";

import AboutUsPage from "./pages/AboutUs";
import ContactPage from "./pages/Contact";
import SkiCamsPage from "./pages/SkiCams";

// import logo from "./logo.svg";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[600] },
    secondary: { main: orange[600] }
  },
  typography: { useNextVariants: true }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <DefaultLayout>
            <Switch>
              <Route path="/contact" component={ContactPage} />
              <Route path="/skicams" component={SkiCamsPage} />
              <Route exact path="/" component={AboutUsPage} />
            </Switch>
          </DefaultLayout>
        </MuiThemeProvider>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
