const validate = (values) => {
  //store the error messages in object
  const errors = {};

  //validate email
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!validateEmail(values.email)) {
    errors.email = "This is not a valid email format";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  }
  return errors;
};

export default validate;
