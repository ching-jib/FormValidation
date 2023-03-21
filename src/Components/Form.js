import { useState, useEffect } from "react";
import validate from "../Components/Validate";

const Form = () => {
  //object to store the information
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    console.log(errorMessages);
    if (Object.keys(errorMessages).length === 0 && isSubmitted) {
      console.log(formData);
      alert("Login in successfully!");
    }
  }, [errorMessages]);

  //event handler for input box
  const handleTextChange = (event) => {
    //JS object destructuring
    const { name, value } = event.target;
    //access the prevState of formData and change the object - [key]:value
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //event handler for submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessages(validate(formData));
    setIsSubmitted(true);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="main-header">
          <p className="login-header">Welcome Back!</p>
          <p className="login-subheading">
            Don't have an account? <span>Create an account with us!</span>
          </p>
          <p className="login-subheading">It takes less than a minute.</p>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <input
            className="input-box"
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleTextChange}
            required
          />
        </div>
        <p className="error-msg">{errorMessages.email}</p>

        <div className="field">
          <label className="label">Password</label>
          <input
            className="input-box"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleTextChange}
            required
          />
        </div>
        <p className="error-msg">{errorMessages.password}</p>

        <p className="forget-pw">Forget Password?</p>
        <button className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Form;
