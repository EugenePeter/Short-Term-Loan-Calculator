import React, { useContext } from "react";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { Container, TitleContainer, ContainerNarrower } from "../../global-styles/global.styles";
import { GlobalButton, BackBtn } from "../../global-styles/GlobalButton.styles";

import { FormContainer, ButtonWrapper } from "../../components/Form/form-input/form-input.styles";

import FormInput from "../../components/Form/form-input/form-input.component";

function Address() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const suburb = appState.personalDetails.address.suburb;
  const town = appState.personalDetails.address.town;
  const city = appState.personalDetails.address.city;
  const country = appState.personalDetails.address.country;

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
            <h2>Address</h2> {""}
            <small>Getting there champ!</small>
          </TitleContainer>
          <FormInput onChange={(e) => appDispatch({ type: "suburb", value: e.target.value })} name="Address" type="text" value={suburb} label="Suburb" />
          {suburb}
          <FormInput onChange={(e) => appDispatch({ type: "town", value: e.target.value })} name="Address" type="text" value={town} label="Town" />
          <FormInput onChange={(e) => appDispatch({ type: "city", value: e.target.value })} name="Address" type="text" value={city} label="City" />
          <FormInput onChange={(e) => appDispatch({ type: "country", value: e.target.value })} name="Address" type="text" value={country} label="Country" />

          <ButtonWrapper>
            <GlobalButton filterApplicants>Save And Continue</GlobalButton>
          </ButtonWrapper>
        </FormContainer>
      </ContainerNarrower>
    </Container>
  );
}
export default Address;
