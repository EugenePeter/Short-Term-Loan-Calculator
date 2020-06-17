import React, { useContext } from "react";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import CustomButton from "../../components/custom-button/custom-button.component";

import { FormContainer, ButtonWrapper } from "../../components/Form/form-input/form-input.styles";

import FormInput from "../../components/Form/form-input/form-input.component";

function IdentificationRequirement() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  // const firstName = appState.firstName;
  // const lastName = appState.lastName;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      This isfrom the requirement component
      <FormInput onChange={(e) => appDispatch({ type: "lName", value: e.target.value })} name="lname" type="text" value="test" label="last name" required />
      <ButtonWrapper>
        <CustomButton application>Save And Continue </CustomButton>
      </ButtonWrapper>
    </FormContainer>
  );
}

export default IdentificationRequirement;
