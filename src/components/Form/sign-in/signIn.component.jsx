import React, { Componen } from "react";

import "normalize.css";

import FormInput from "../form-input/form-input.component";

import { FormContainer, ButtonWrapper } from "../form-input/form-input.styles";

import CustomButton from "../../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../../components/firebase/firebase.utils";

import {
  SignInContainer,
  SignInTitle,
  // ButtonsBarContainer,
} from "./sign-in.styles";

import { Container } from "../../../global-styles/global.styles";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    this.setState({ email: "", password: "" });

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <SignInContainer>
          <SignInTitle>I already have an account</SignInTitle>
          <span>Sign in with your email and password</span>

          <FormContainer onSubmit={this.handleSubmit}>
            <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="email" required />
            <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="password" required />

            <ButtonWrapper>
              <CustomButton type="submit" signIn>
                {" "}
                Sign in{" "}
              </CustomButton>
              <CustomButton onClick={signInWithGoogle} googleSignIn>
                Sign in with Google{" "}
              </CustomButton>
            </ButtonWrapper>
          </FormContainer>
        </SignInContainer>
      </Container>
    );
  }
}

export default SignIn;
