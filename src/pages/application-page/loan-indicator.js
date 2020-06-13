import React, { Component, Fragment, useState, useEffect, useContext } from "react";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { useImmerReducer } from "use-immer";

import { Container, ContainerNarrower } from "../../global-styles/global.styles";

import { FormContainer, ButtonsBarContainer, ButtonWrapper, FormBlock, RadioInput, FormSelect, FormTwoColumns, Span } from "../../components/Form/form-input/form-input.styles";

import { GroupContainer } from "../../components/Form/form__global-styles";

import { LoanIndicatorContainer, LoanIndicatorWrapper, LoanIndicatorProgressBar, Modifier } from "./loan-indicator.styles";

function LoanIndicator() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    appDispatch({ type: "nxtStep" });
  };

  const currentStep = appState.step;

  return (
    <Fragment>
      <Modifier />
      <Container>
        <LoanIndicatorContainer>
          <ContainerNarrower>
            <LoanIndicatorWrapper step={currentStep}>
              <LoanIndicatorProgressBar />
            </LoanIndicatorWrapper>
          </ContainerNarrower>
        </LoanIndicatorContainer>
      </Container>
    </Fragment>
  );
}
export default LoanIndicator;
