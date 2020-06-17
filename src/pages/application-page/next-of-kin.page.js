import React, { useContext } from "react";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { Container, ContainerNarrower, TitleContainer } from "../../global-styles/global.styles";

import { GlobalButton, BackBtn } from "../../global-styles/GlobalButton.styles";

import { FormContainer, FormInputContainer, ButtonWrapper, FormInputSpan, GroupContainer } from "../../components/Form/form-input/form-input.styles";

import RadioBlockComponent from "../../components/Form/tabs-component/RadioBlock.component";
import { RadioContainer } from "../../components/Form/tabs-component/RadioInputBlock.styles";

function NextOfKin() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const firstName = appState.nextOfKin.firstName;
  const lastName = appState.nextOfKin.lastName;
  const contactNumber = appState.nextOfKin.contactNumber;

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
          <ButtonWrapper>
            <BackBtn onClick={handleBack} /> Back
          </ButtonWrapper>
          <TitleContainer>
            <h2>Next of Kin</h2> {""}
            <small>In case of emegergency, who should we contact</small>
          </TitleContainer>

          <GroupContainer>
            <FormInputContainer onChange={(e) => appDispatch({ type: "kinFName", value: e.target.value })} name="firstname" type="text" value={firstName} label=" First Name" />
            <FormInputSpan value={firstName}> First Name </FormInputSpan>
          </GroupContainer>

          <GroupContainer>
            <FormInputContainer onChange={(e) => appDispatch({ type: "kinLName", value: e.target.value })} name="lastName" type="text" value={lastName} label=" last Name" />
            <FormInputSpan value={lastName}> Last Name </FormInputSpan>
          </GroupContainer>

          <RadioContainer
            onClick={(e) =>
              appDispatch({
                type: "kinRelationship",
                value: e.target.value,
              })
            }
          >
            <h5>Relationship with you</h5>
            <RadioBlockComponent label="Father" value="Father" name="relationsip" clicked />
            <RadioBlockComponent label="Mother" value="Mother" name="relationsip" />
            <RadioBlockComponent label="Brother" value="Brother" name="relationsip" />
            <RadioBlockComponent label="Sister" value="Sister" name="relationsip" />
            <RadioBlockComponent label="Partner" value="Partner" name="relationsip" />
          </RadioContainer>

          <GroupContainer>
            <FormInputContainer onChange={(e) => appDispatch({ type: "kinContactNumber", value: e.target.value })} name="contactNumber" type="number" value={contactNumber} label="mobile number: 123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
            <FormInputSpan value={contactNumber}> Contact Number: 123-456-7890</FormInputSpan>
          </GroupContainer>

          <ButtonWrapper>
            <GlobalButton filterApplicants>Save And Continue</GlobalButton>
          </ButtonWrapper>
        </FormContainer>
      </ContainerNarrower>
    </Container>
  );
}
export default NextOfKin;
