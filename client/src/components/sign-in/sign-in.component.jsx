import React from 'react';
import { useForm } from 'react-hook-form';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
    googleSignInStart,
    emailSignInStart,
} from '../../redux/user/user.actions';
import { useDispatch } from 'react-redux';

const SignIn = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const submit = async (data) => {
        const { email, password } = data;
        dispatch(emailSignInStart(email, password));
    };

    const googleSignInStartHandler = () => {
        dispatch(googleSignInStart());
    };

    return (
        <div className="sign-in">
            <h2 className="my-2 font-bold text-2xl">
                I already have an account
            </h2>
            <span className="py-2">Sign in with your email and password.</span>
            <form id="sign-in-form" onSubmit={handleSubmit(submit)}>
                <FormInput
                    formHook={{ ...register('email', { required: true }) }}
                    type="email"
                    name="email"
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    formHook={{ ...register('password', { required: true }) }}
                    required
                />
                <div className="flex justify-between">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton
                        type="button"
                        onClick={googleSignInStartHandler}
                        isGoogleSignIn
                    >
                        {' '}
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password })),
});

export default SignIn;
