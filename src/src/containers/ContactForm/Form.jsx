import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  actionsContainer: {
    display: "flex",
    flexDirection: "row-reverse"
  }
});

const FormikTextField = ({ touched, errors, name, onChange, ...rest }) => (
  <TextField
    name={name}
    helperText={touched[name] ? errors[name] : ""}
    error={touched.name && Boolean(errors[name])}
    onChange={onChange.bind(null, name)}
    {...rest}
  />
);

const Form = props => {
  const {
    classes,
    className,
    values: { name, email, message },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    validateForm
  } = props;

  const onChange = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  const textFields = [
    {
      className: "required",
      touched,
      errors,
      onChange,
      name: "name",
      label: "Name",
      value: name,
      fullWidth: true
    },
    {
      className: "required",
      touched,
      errors,
      onChange,
      name: "email",
      label: "Email",
      value: email,
      fullWidth: true
    },
    {
      touched,
      errors,
      onChange,
      name: "message",
      label: "Message",
      value: message,
      fullWidth: true,
      multiline: true,
      rows: 6
    }
  ];

  return (
    <form onSubmit={handleSubmit} className={className}>
      {textFields.map(f => (
        <Fragment key={f.name}>{FormikTextField(f)}</Fragment>
      ))}

      <div className={classes.actionsContainer}>
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </div>
    </form>
  );
};

export default withStyles(styles)(Form);
