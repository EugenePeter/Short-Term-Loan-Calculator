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

function UserDetails() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const FirstName = appState.personalDetails.firstName;
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
          <FormBlock>
            <div className="titleLabel">Preferred Title</div>
            <div className="titleRadioInputContainer">
              <div className="titleCheckboxItems">
                {" "}
                <RadioInput
                  onClick={(e) =>
                    appDispatch({ type: "gender", value: e.target.value })
                  }
                  type="radio"
                  name="gender"
                  value="Mr"
                />
                <label htmlFor="gender1">Mr</label>
              </div>
              <div className="titleCheckboxItems">
                {" "}
                <RadioInput
                  onClick={(e) =>
                    appDispatch({ type: "gender", value: e.target.value })
                  }
                  type="radio"
                  name="gender"
                  value="Mrs"
                />
                <label htmlFor="gender1">Mrs</label>
              </div>
              <div className="titleCheckboxItems">
                {" "}
                <RadioInput
                  onClick={(e) =>
                    appDispatch({ type: "gender", value: e.target.value })
                  }
                  type="radio"
                  name="gender"
                  value="Miss"
                />
                <label htmlFor="gender1">Miss</label>
              </div>
            </div>
          </FormBlock>
          <FormInput
            onChange={(e) =>
              appDispatch({ type: "fName", value: e.target.value })
            }
            name="fname"
            type="text"
            value={FirstName}
            label="first name"
          />
          <FormInput
            onChange={(e) =>
              appDispatch({ type: "lName", value: e.target.value })
            }
            name="lname"
            type="text"
            value={lastName}
            label="last name"
          />
          <FormInput
            onChange={(e) =>
              appDispatch({ type: "mobileNumber", value: e.target.value })
            }
            type="number"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={mobileNumber}
            label="mobile number: 123-456-7890"
          />
          <FormInput
            onChange={(e) =>
              appDispatch({ type: "lName", value: e.target.value })
            }
            name="lname"
            type="date"
            value={birthDay}
            label="Birthday"
          />
          <ButtonWrapper>
            <GlobalButton filterApplicants>Save And Continue</GlobalButton>
          </ButtonWrapper>
          <ButtonWrapper>
            <GlobalButton onClick={handleBack}>Back</GlobalButton>
          </ButtonWrapper>
        </FormContainer>
      </ContainerNarrower>
    </Container>
  );
}
export default UserDetails;
