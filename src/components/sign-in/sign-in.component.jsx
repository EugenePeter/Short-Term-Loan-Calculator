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
} from "../Form/form-input/form-input.styles";

import FormInput from "../../components/Form/form-input/form-input.component";
import { FormInner } from "./sign-in.styles";

import LoadingIcon from "../../global-styles/Loading-icons.component";

function SignIn(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await Axios.post(
        "https://cashifiedbackend.herokuapp.com/login",
        {
          username: username,
          password: password,
        }
      );
      setIsLoading(false);
      console.log(response.data);
      if (response.data) {
        appDispatch({ type: "login", data: response.data });
        // alert("Welcome");
      } else {
        alert("Incorrect Username or password");
      }
    } catch (e) {
      alert(e);

      console.log(e);
    }
  };

  if (isLoading)
    return (
      <Container>
        <ContainerNarrower>
          <LoadingIcon />
        </ContainerNarrower>
      </Container>
    );

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
