import React from "react";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    backgroundColor: "#2d2d2d"
  },
  powered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: "100%",
    maxWidth: 300,
    borderTop: `1px solid ${theme.palette.grey[700]}`,
    color: theme.palette.grey[600]
  }
});

const Footer = ({ classes, ...rest }) => {
  return (
    <div {...rest}>
      <AppBar position="relative" elevation={10} className={classes.root}>
        <div className={classes.powered}>
          <Typography variant="caption" color="inherit">
            Powered by PGS
          </Typography>
        </div>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Footer);
