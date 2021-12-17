import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

const SignUp = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const submit = async (data) => {
    const { displayName, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    dispatch(signUpStart({ displayName, email, password }));
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit(submit)}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          formHook={{ ...register("displayName") }}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          formHook={{ ...register("email") }}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          formHook={{ ...register("password") }}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          formHook={{ ...register("confirmPassword") }}
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
