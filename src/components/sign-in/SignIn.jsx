import React, { useState } from "react";
import "./SignIn.styles.scss";

import {
  googlePopupSignIn,
  signInAuthUserWithEmailAndPassword,
  createUserDoc,
} from "../../firebase";

// components
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // log a user to firebase via google auth
  const logGoogleUser = async () => {
    const { user } = await googlePopupSignIn();
    await createUserDoc(user);
    console.log(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      clearFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        console.log("Incorrect password");
      }
      if (error.code === "auth/user-not-found") {
        console.log("No email associated with this account");
      }
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const clearFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in</span>
      <form onSubmit={handleSubmit} action="">
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
        <div className="buttons-container">
          <Button buttonType="default" type="submit">
            Sign In
          </Button>
          <Button onClick={logGoogleUser} buttonType="google" type="button">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
