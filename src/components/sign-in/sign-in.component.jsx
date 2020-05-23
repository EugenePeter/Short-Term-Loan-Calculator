import React, {
  Component,
  Fragment,
  useState,
  useEffect,
  useContext,
} from "react";

import Axios from "axios";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { useImmerReducer } from "use-immer";

import {
  Container,
  TitleContainer,
  ContainerNarrower,
} from "../../global-styles/global.styles";
import CustomButton from "../../components/custom-button/custom-button.component";
import { GlobalButton, BackBtn } from "../../global-styles/GlobalButton.styles";

import {
  FormContainer,
  FormInputContainer,
  FormInputSpan,
  ButtonWrapper,
  GroupContainer,
} from "../../components/Form/form-input/form-input.styles";

import FormInput from "../../components/Form/form-input/form-input.component";

import { FormInner } from "./sign-in.styles";

function SignIn(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("http://localhost:8080/login", {
        username: username,
        password: password,
      });
      if (response.data) {
        appDispatch({ type: "login", data: response.data });
      } else {
        console.log("Incorrect username / password.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  return (
    <Container>
      <ContainerNarrower>
        <FormContainer onSubmit={handleSubmit}>
          <TitleContainer>
            <h2>Please signin</h2> {""}
            <small>Getting there champ!</small>
          </TitleContainer>
          <GroupContainer>
            <FormInputContainer
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              type="text"
              value={username}
              label="username"
            />
            <FormInputSpan value={username}>username</FormInputSpan>
          </GroupContainer>
          <GroupContainer>
            <FormInputContainer
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              value={password}
              label="password"
            />
            <FormInputSpan value={password}>password</FormInputSpan>
          </GroupContainer>

          <ButtonWrapper>
            <GlobalButton onClick={handleSubmit} filterApplicants>
              Sign In
            </GlobalButton>
          </ButtonWrapper>
        </FormContainer>
      </ContainerNarrower>
    </Container>
  );
}

export default SignIn;
