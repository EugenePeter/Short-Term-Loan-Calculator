import React, { Component, Fragment} from 'react';

import 'normalize.css';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../../custom-button/custom-button.component';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer,
    Form
    } from './sign-in.styles';


import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };



    render() {
        return(
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <Form onSubmit={this.handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='password'
                    required
                />

                <ButtonsBarContainer>
                    <CustomButton type='submit' signIn> Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle} googleSignIn>Sign in with Google </CustomButton>
                </ButtonsBarContainer>
            </Form>
        </SignInContainer>
        );
    }
}

export default SignIn;