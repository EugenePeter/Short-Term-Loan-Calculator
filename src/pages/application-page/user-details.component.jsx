import React, { useContext } from "react";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { Container, TitleContainer, ContainerNarrower } from "../../global-styles/global.styles";
import RadioBlockComponent from "../../components/Form/tabs-component/RadioBlock.component";
import { RadioContainer } from "../../components/Form/tabs-component/RadioInputBlock.styles";
import { GlobalButton, BackBtn } from "../../global-styles/GlobalButton.styles";

import { FormContainer, ButtonWrapper, FormBlock } from "../../components/Form/form-input/form-input.styles";

import FormInput from "../../components/Form/form-input/form-input.component";

function UserDetails() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const FirstName = appState.personalDetails.firstName;
  const lastName = appState.personalDetails.lastName;
  const mobileNumber = appState.personalDetails.mobileNumber;
  const birthDay = appState.personalDetails.birthDay;
  // const title = appState.personalDetails.gender;

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
          <FormBlock>
            <ButtonWrapper>
              <BackBtn onClick={handleBack} /> Back
            </ButtonWrapper>
            <TitleContainer>
              <h2>Preferred Title</h2> {""}
              <small>Tell us more about you</small>
            </TitleContainer>
            <RadioContainer onClick={(e) => appDispatch({ type: "gender", value: e.target.value })}>
              <h5>How should we call you?</h5>
              <RadioBlockComponent label="Mr" value="Mr" name="gender" gender />
              <RadioBlockComponent label="Mrs" value="Mrs" name="gender" />
              <RadioBlockComponent label="Miss" value="Miss" name="gender" />
            </RadioContainer>
          </FormBlock>
          <FormInput onChange={(e) => appDispatch({ type: "fName", value: e.target.value })} name="fname" type="text" value={FirstName} label="first name" />
          <FormInput onChange={(e) => appDispatch({ type: "lName", value: e.target.value })} name="lname" type="text" value={lastName} label="last name" />
          <FormInput onChange={(e) => appDispatch({ type: "mobileNumber", value: e.target.value })} type="number" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={mobileNumber} label="mobile number: 123-456-7890" />
          <FormInput onChange={(e) => appDispatch({ type: "birthday", value: e.target.value })} type="date" value={birthDay} label="Birthday" />
          <ButtonWrapper>
            <GlobalButton filterApplicants>Save And Continue</GlobalButton>
          </ButtonWrapper>
        </FormContainer>
      </ContainerNarrower>
    </Container>
  );
}
export default UserDetails;
