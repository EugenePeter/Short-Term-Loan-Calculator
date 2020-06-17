import React, { useContext } from "react";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { Container, ContainerNarrower, TitleContainer } from "../../global-styles/global.styles";

import { GlobalButton, BackBtn } from "../../global-styles/GlobalButton.styles";

import { FormContainer, FormInputContainer, ButtonWrapper, FormInputSpan, GroupContainer } from "../../components/Form/form-input/form-input.styles";

function BankDetails() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const bankAccountNumber = appState.bankDetails.bankAccountNumber;

  const handleSubmit = async (e) => {
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
          <ButtonWrapper>
            <BackBtn onClick={handleBack} /> Back
          </ButtonWrapper>
          <TitleContainer>
            <h2>Bank Details</h2> {""}
            <small>When your application is approved, where shoul we deposit the amount?</small>
          </TitleContainer>

          <GroupContainer>
            <FormInputContainer onChange={(e) => appDispatch({ type: "bankDetails", value: e.target.value })} name="bankDetails" type="number" value={bankAccountNumber} label="bank-details" placeholder={bankAccountNumber} />
            <FormInputSpan value={bankAccountNumber}>Bank Account</FormInputSpan>
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
