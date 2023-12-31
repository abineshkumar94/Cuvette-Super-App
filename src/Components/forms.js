import React, { useState } from "react";
import "./form.css";
import Image1 from "./image-1";
import { useNavigate } from "react-router-dom";

const Form = ({ setFormSubmitted }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [nameError, setNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [isCheckedError, setIsCheckedError] = useState("");

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
    setMobileError("");
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    setIsCheckedError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formIsValid = true;

    if (name === "") {
      setNameError("Field is required");
      formIsValid = false;
    }
    if (username === "") {
      setUsernameError("Field is required");
      formIsValid = false;
    }
    if (email === "") {
      setEmailError("Field is required");
      formIsValid = false;
    }
    if (mobile === "") {
      setMobileError("Field is required");
      formIsValid = false;
    }

    if (!isChecked) {
      setIsCheckedError("Check this box if you want to proceed");
      formIsValid = false;
    }

    if (formIsValid) {
      const userData = {
        name,
        username,
        email,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      setFormSubmitted(true);
      navigate("/Page2"); 
    }

  
  };

  return (
    <div className="form-input">
      <div>
        <Image1 />
      </div>
      <form onSubmit={handleSubmit}>
        <h2 className="super-app">Super app</h2>
        <h3 className="cyna">Create your new account</h3>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        {nameError && <p className="error-message">{nameError}</p>}
        <input
          type="text"
          placeholder="UserName"
          value={username}
          onChange={handleUsernameChange}
        />
        {usernameError && <p className="error-message">{usernameError}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <p className="error-message">{emailError}</p>}
        <input
          type="text"
          placeholder="Mobile"
          value={mobile}
          onChange={handleMobileChange}
        />
        {mobileError && <p className="error-message">{mobileError}</p>}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <h6 className="check-box-text">Share my registration data with Superapp</h6>
        {isCheckedError && <p className="error-message">{isCheckedError}</p>}
        <button className="btn" type="submit">
          SIGN UP
        </button>
        <h5 className="h-five">
          By clicking on Sign up. you agree to Superapp{" "}
          <span className="h-five-1">Terms and </span>
        </h5>
        <h5 className="h-five-2">Conditions of Use</h5>
        <h5 className="h-five-01">
          To learn more about how Superapp collects, uses, shares and <br />
          protects your personal data please head Superapp{" "}
          <span className="h-five-3">Privacy</span>
        </h5>
        <h5 className="h-five-4">Policy</h5>
      </form>
    </div>
  );
};

export default Form;






