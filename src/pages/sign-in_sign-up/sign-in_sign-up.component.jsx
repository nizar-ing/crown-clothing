import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "./../../components/sign-up/sign-up.component";

import "./sign-in_sign-up.styles.scss";

const SignInAndSignUp = () => {
  return (
    <div className='sign-in_sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
