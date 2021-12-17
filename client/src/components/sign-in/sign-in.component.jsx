import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { useForm } from "react-hook-form";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./sign-in.styles";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const submit = async (data) => {
    const { email, password } = data;
    dispatch(emailSignInStart(email, password));
  };

  const googleSignInStartHandler = () => {
    dispatch(googleSignInStart());
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit(submit)}>
        <FormInput
          name="email"
          type="email"
          label="email"
          hookForm={{ ...register("email") }}
          required
        />
        <FormInput
          name="password"
          type="password"
          hookForm={{ ...register("password") }}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStartHandler}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
