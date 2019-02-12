import React from "react";
import { withStyles } from "@material-ui/core/styles";

import ContactForm from "../../containers/ContactForm";

const styles = theme => ({
  root: {
    display: "flex"
  }
});

const ContactPage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <ContactForm />
    </div>
  );
};

export default withStyles(styles)(ContactPage);
