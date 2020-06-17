import React, { useState, useContext } from "react";

import { useImmer, useImmerReducer } from "use-immer";

import Axios from "axios";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { Container, TitleContainer, ContainerNarrower } from "../../global-styles/global.styles";
import { GlobalButton } from "../../global-styles/GlobalButton.styles";

import { FormContainer, FormInputContainer, FormInputSpan, ButtonWrapper, GroupContainer } from "../Form/form-input/form-input.styles";

import LoadingIcon from "../../global-styles/Loading-icons.component";

function SignIn(props) {
  const appDispatch = useContext(DispatchContext);

  const initialState = {
    username: "",
    password: "",
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "username":
        draft.username = action.value;
        return;
      case "password":
        draft.password = action.value;
        return;
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // const handleUsernameChange = (e) => {
  //   setLogin((draft) => {
  //     draft.username = e.target.value;
  //   });
  // };

  // const handlePasswordChange = (e) => {
  //   setLogin((draft) => {
  //     draft.userpassword = e.target.value;
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await Axios.post("https://cashifiedbackend.herokuapp.com/login", {
        username: state.username,
        password: state.password,
      });
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
            <FormInputContainer onChange={(e) => dispatch({ type: "username", value: e.target.value })} name="username" type="text" value={state.username} label="username" />
            <FormInputSpan value={state.username}>username</FormInputSpan>
          </GroupContainer>
          <GroupContainer>
            <FormInputContainer onChange={(e) => dispatch({ type: "password", value: e.target.value })} name="password" type="password" value={state.password} label="password" />
            <FormInputSpan value={state.password}>password</FormInputSpan>
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
