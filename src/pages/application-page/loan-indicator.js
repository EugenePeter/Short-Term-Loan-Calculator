import React, {
  Component,
  Fragment,
  useState,
  useEffect,
  useContext,
} from "react";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { useImmerReducer } from "use-immer";

import {
  Container,
  ContainerNarrower,
} from "../../global-styles/global.styles";

import {
  FormContainer,
  ButtonsBarContainer,
  ButtonWrapper,
  FormBlock,
  RadioInput,
  FormSelect,
  FormTwoColumns,
  Span,
} from "../../components/Form/form-input/form-input.styles";

import { GroupContainer } from "../../components/Form/form__global-styles";

import {
  LoanIndicatorWrapper,
  LoanIndicatorProgressBar,
} from "./loan-indicator.styles";

function LoanIndicator() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    appDispatch({ type: "nxtStep" });
  };

  const currentStep = appState.step;

  return (
    <Container>
      <ContainerNarrower>
        <LoanIndicatorWrapper step={currentStep}>
          <LoanIndicatorProgressBar />
        </LoanIndicatorWrapper>
      </ContainerNarrower>
    </Container>
  );
}
export default LoanIndicator;
