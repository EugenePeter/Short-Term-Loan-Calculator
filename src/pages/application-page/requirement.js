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
import CustomButton from "../../components/custom-button/custom-button.component";
import { GlobalButton } from "../../global-styles/GlobalButton.styles";

import Checkbox from "../../components/Form/checkbox-component/CheckBox.component";

import { CheckBoxBlock } from "../../components/Form/checkbox-component/Checkbox.styles";

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

import FormInput from "../../components/Form/form-input/form-input.component";

import { TitleContainer } from "../../global-styles/global.styles";

function Requirements() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const firstName = appState.personalDetails.firstName;
  const lastName = appState.personalDetails.lastName;
  const mobileNumber = appState.personalDetails.mobileNumber;
  const birthDay = appState.personalDetails.birthDay;
  const title = appState.personalDetails.gender;

  const handleSubmit = (e) => {
    e.preventDefault();
    appDispatch({ type: "nxtStep" });
  };

  const handleBack = (e) => {
    e.preventDefault();
    appDispatch({ type: "back" });
  };

  return (
    <Container>
      <ContainerNarrower>
        <FormContainer onSubmit={handleSubmit}>
          <GroupContainer>
            <TitleContainer>
              <h2>Requirements</h2> {""}
              <small>
                Before you can proceed, first you need to check if you qualify
                for a loan with us
              </small>
            </TitleContainer>
            <CheckBoxBlock>
              <Checkbox />
              <small htmlFor="c1">You are 18 years old or older</small>
            </CheckBoxBlock>
            <CheckBoxBlock>
              <Checkbox />
              <small htmlFor="c1">
                NZ/AU citizen, resident or hold a valid work visa{" "}
              </small>
            </CheckBoxBlock>
            <CheckBoxBlock>
              <Checkbox />
              <small htmlFor="c1">
                Working full-time or part-time with a minimum of three months
                tenure with your current employer?{" "}
              </small>
            </CheckBoxBlock>
            <CheckBoxBlock>
              <Checkbox />
              <small htmlFor="c1">
                Have a valid photo ID? : Only NZ driving license or any passport
                accepted{" "}
              </small>
            </CheckBoxBlock>
            <CheckBoxBlock>
              <Checkbox />
              <small htmlFor="c1">
                Receive minimum net income of over NZD 300 per week?{" "}
              </small>
            </CheckBoxBlock>
            <CheckBoxBlock>
              <Checkbox />
              <small htmlFor="c1">
                Have a proof of address : received by post within last two
                months?{" "}
              </small>
            </CheckBoxBlock>
            <CheckBoxBlock>
              <Checkbox />
              <small htmlFor="c1">Not on goverment benefits </small>
            </CheckBoxBlock>
          </GroupContainer>

          <ButtonWrapper>
            <GlobalButton filterApplicants>Save And Continue</GlobalButton>
          </ButtonWrapper>
        </FormContainer>
      </ContainerNarrower>
    </Container>
  );
}
export default Requirements;
