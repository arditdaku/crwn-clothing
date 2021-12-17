import React from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
import './sign-up.styles.scss';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const submit = async (data) => {
        const { displayName, email, password, confirmPassword } = data;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        dispatch(signUpStart({ displayName, email, password }));
    };

    return (
        <div className="sign-up">
            <h2 className="my-2 font-bold text-2xl">
                I do not have an account
            </h2>
            <span className="py-2">Sign up with email and password</span>
            <form
                id="register-user-form"
                className="sign-up-form"
                onSubmit={handleSubmit(submit)}
            >
                <FormInput
                    type="text"
                    name="displayName"
                    label="Display Name"
                    required
                    formHook={{ ...register('displayName') }}
                />
                <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    required
                    formHook={{ ...register('email') }}
                />
                <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    formHook={{ ...register('password') }}
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    required
                    formHook={{ ...register('confirmPassword') }}
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    );
};

export default SignUp;
