import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import NavBar from "../components/NavBar";

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
  content: {
    padding: theme.spacing.unit * 2
  }
});

const DefaultLayout = ({ classes, children }) => {
  return (
    <div>
      <div>
        <NavBar items={navBarItems} />
      </div>
      <Grid container className={classes.content} justify="center">
        {children}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(DefaultLayout);
