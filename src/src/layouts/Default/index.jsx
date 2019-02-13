import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import Footer from "./Footer";
import NavBar from "../../components/NavBar";

import logo from "../../assets/logo.png";

export const contentWidth = 1000;

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
  headerContainer: {
    borderBottom: `1px solid ${theme.palette.grey.A100}`,
    justifyContent: "center"
  },
  header: {
    width: "100%",
    maxWidth: contentWidth
  },
  contentContainer: {
    padding: theme.spacing.unit * 2,
    flex: "1"
  },
  content: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      maxWidth: contentWidth
    }
  },
  footer: {},
  logo: {
    maxWidth: 100
  }
});

const DefaultLayout = ({ classes, children }) => {
  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <div className={classes.header}>
          <Hidden smDown>
            <Link to="/">
              <img src={logo} alt="PGS-logo" className={classes.logo} />
            </Link>
          </Hidden>

          <NavBar items={navBarItems} />
        </div>
      </div>

      <Grid container className={classes.contentContainer} justify="center">
        <div className={classes.content}>{children}</div>
      </Grid>

      <Footer className={classes.footer} />
    </div>
  );
};

export default withStyles(styles)(DefaultLayout);
