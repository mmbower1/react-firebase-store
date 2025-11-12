// import React, { useEffect } from "react";
import "./Auth.styles.scss";

// components
import SignupForm from "../../components/signup/SignUp.jsx";
import SignInForm from "../../components/sign-in/SignIn.jsx";

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignupForm />
      {/* <button onClick={googleRedirectSignIn}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default Authentication;
