import React, { useContext, useState } from "react";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { useImmerReducer, useImmer } from "use-immer";

import {
  Container,
  ContainerNarrower,
  TitleContainer,
  ContainerRow,
} from "../../global-styles/global.styles";

import { GlobalButton, BackBtn } from "../../global-styles/GlobalButton.styles";

import {
  FormContainer,
  FormInputContainer,
  ButtonWrapper,
  FormInputSpan,
  GroupContainer,
} from "../../components/Form/form-input/form-input.styles";

import RadioBlockComponent from "../../components/Form/tabs-component/RadioBlock.component";
import { JobType } from "../../components/Form/job-type/radioBtnContainer";
import { RadioContainer } from "../../components/Form/tabs-component/RadioInputBlock.styles";

import ApplicationPage from "../application-page/application-page";
import { withRouter } from "react-router-dom";

function Dashboard(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.history.push("/warning");
  };

  const handleBack = (e) => {
    e.preventDefault();
    appDispatch({ type: "back" });
  };

  return (
    <Container>
      <ContainerNarrower>
        <TitleContainer>
          <small>Hi {appState.user.username}</small>
          <h2>Welcome</h2> {""}
        </TitleContainer>
        <ApplicationPage />
        <ButtonWrapper>
          <GlobalButton filterApplicants onClick={handleSubmit}>
            Save And Continue
          </GlobalButton>
        </ButtonWrapper>
      </ContainerNarrower>
    </Container>
  );
}
export default withRouter(Dashboard);
