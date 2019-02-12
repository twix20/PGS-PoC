import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Footer from "./Footer";
import NavBar from "../../components/NavBar";

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
    flexFlow: "column",
    justifyContent: "center",
    height: "100%"
  },
  header: {
    borderBottom: `1px solid ${theme.palette.grey.A100}`
  },
  content: {
    padding: theme.spacing.unit * 2,
    flex: "1"
  },
  footer: {}
});

const DefaultLayout = ({ classes, children }) => {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <NavBar items={navBarItems} />
      </div>

      <Grid container className={classes.content} justify="center">
        {children}
      </Grid>

      <Footer className={classes.footer} />
    </div>
  );
};

export default withStyles(styles)(DefaultLayout);
