import React, { useState } from "react";
import "./SignUp.styles.scss";

import {
  createAuthUserWithEmailAndPassword,
  createUserDoc,
} from "../../firebase";

// components
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  password2: "",
};

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, password2 } = formFields;

  const clearFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != password2) {
      console.log("Passwords dont match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDoc(user, { displayName });
      clearFields();
      console.log(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log("Email already taken");
      } else {
        console.log("Cant create account due to server error", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up</span>
      <form onSubmit={handleSubmit} action="">
        <FormInput
          label="Display Name"
          required
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          label="Confirm Password"
          required
          type="password"
          name="password2"
          value={password2}
          onChange={handleChange}
        />
        <Button buttonType="default" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
