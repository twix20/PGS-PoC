import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import Footer from "./Footer";
import NavBar from "../../components/NavBar";

import logo from "../../assets/logo.png";

const navBarItems = [
  {
    to: "/",
    text: "About Us"
  },
  {
    to: "/skicams",
    text: "Skicams"
  },
  {
    to: "/contact",
    text: "Contact"
  }
];

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    "& > div": {
      display: "flex"
    }
  },
  header: {
    borderBottom: `1px solid ${theme.palette.grey.A100}`,
    justifyContent: "center"
  },
  headerInner: {
    width: "100%",
    maxWidth: "800px"
  },
  content: {
    padding: theme.spacing.unit * 2,
    flex: "1"
  },
  footer: {},
  logo: {
    maxWidth: "100px"
  }
});

const DefaultLayout = ({ classes, children }) => {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.headerInner}>
          <Hidden smDown>
            <Link to="/">
              <img
                src={logo}
                className="PGS-logo"
                alt="logo"
                className={classes.logo}
              />
            </Link>
          </Hidden>

          <NavBar items={navBarItems} />
        </div>
      </div>

      <Grid container className={classes.content} justify="center">
        {children}
      </Grid>

      <Footer className={classes.footer} />
    </div>
  );
};

export default withStyles(styles)(DefaultLayout);
