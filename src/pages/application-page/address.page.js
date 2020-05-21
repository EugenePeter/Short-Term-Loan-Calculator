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
  TitleContainer,
  ContainerNarrower,
} from "../../global-styles/global.styles";
import CustomButton from "../../components/custom-button/custom-button.component";
import { GlobalButton, BackBtn } from "../../global-styles/GlobalButton.styles";

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

import FormInput from "../../components/Form/form-input/form-input.component";

function Address() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const firstName = appState.personalDetails.firstName;
  const lastName = appState.personalDetails.lastName;
  const mobileNumber = appState.personalDetails.mobileNumber;
  const birthDay = appState.personalDetails.birthDay;
  const title = appState.personalDetails.gender;

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
          <FormInput
            onChange={(e) =>
              appDispatch({ type: "suburb", value: e.target.value })
            }
            name="Address"
            type="text"
            value={suburb}
            label="Suburb"
          />
          {suburb}
          <FormInput
            onChange={(e) =>
              appDispatch({ type: "town", value: e.target.value })
            }
            name="Address"
            type="text"
            value={town}
            label="Town"
          />
          <FormInput
            onChange={(e) =>
              appDispatch({ type: "city", value: e.target.value })
            }
            name="Address"
            type="text"
            value={city}
            label="City"
          />
          <FormInput
            onChange={(e) =>
              appDispatch({ type: "country", value: e.target.value })
            }
            name="Address"
            type="text"
            value={country}
            label="Country"
          />

          <ButtonWrapper>
            <GlobalButton filterApplicants>Save And Continue</GlobalButton>
          </ButtonWrapper>
        </FormContainer>
      </ContainerNarrower>
    </Container>
  );
}
export default Address;
