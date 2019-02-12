import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";

import { Formik } from "formik";
import * as Yup from "yup";

import Form from "./Form";

const validationSchema = Yup.object({
  name: Yup.string("Enter a name").required("Name is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required")
});

const styles = theme => ({
  root: {
    maxWidth: 400,
    width: "100%"
  },
  paper: {
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 8}px`,
    width: "100%",
    maxWidth: 300
  },
  form: {
    "& > div": {
      marginBottom: theme.spacing.unit * 2
    },
    "& .required label:after": {
      content: "'*'",
      color: "red",
      marginLeft: theme.spacing.unit / 2
    }
  }
});

const FormikContactForm = ({ classes }) => {
  const initValues = { name: "", email: "", message: "" };

  const handleSubmit = values => {
    alert(JSON.stringify(values));
  };

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.paper}>
        <Formik
          onSubmit={handleSubmit}
          render={props => <Form className={classes.form} {...props} />}
          initialValues={initValues}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
        />
      </Paper>
    </div>
  );
};

export default withStyles(styles)(FormikContactForm);
