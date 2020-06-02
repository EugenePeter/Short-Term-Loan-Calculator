import React, { useContext, useState } from "react";

import Axios from "axios";

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

function BankDetails() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const bankAccountNumber = appState.bankDetails.bankAccountNumber;

  const handleSubmit = async (e) => {
    e.preventDefault();
    appDispatch({ type: "submit" });
    // try {
    //   const response = await Axios.post("http://localhost:8080/create-post", {
    //     test: "testtttting",
    //     token: localStorage.appToken,
    //   });
    //   // Redirect to new post url
    //   appDispatch({
    //     type: "flashMessage",
    //     value: "Congrats, you created a new post.",
    //   });
    //   console.log("New post was created.");
    // } catch (e) {
    //   console.log(e.response.data + "There was a problem.");
    //   console.log(localStorage);
    // }
  };

  const handleBack = (e) => {
    e.preventDefault();
    appDispatch({ type: "back" });
  };

  return (
    <Container>
      <ContainerNarrower>
        <FormContainer onSubmit={handleSubmit}>
          <ButtonWrapper>
            <BackBtn onClick={handleBack} /> Back
          </ButtonWrapper>
          <TitleContainer>
            <h2>Bank Details</h2> {""}
            <small>
              When your application is approved, where shoul we deposit the
              amount?
            </small>
          </TitleContainer>

          <GroupContainer>
            <FormInputContainer
              onChange={(e) =>
                appDispatch({ type: "bankDetails", value: e.target.value })
              }
              name="bankDetails"
              type="number"
              value={bankAccountNumber}
              label="bank-details"
              placeholder={bankAccountNumber}
            />
            <FormInputSpan value={bankAccountNumber}>
              Bank Account
            </FormInputSpan>
          </GroupContainer>

          <ButtonWrapper>
            <GlobalButton filterApplicants>Save And Continue</GlobalButton>
          </ButtonWrapper>
        </FormContainer>
      </ContainerNarrower>
    </Container>
  );
}
export default BankDetails;
