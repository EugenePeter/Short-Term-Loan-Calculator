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

import { Container } from "../../global-styles/global.styles";
import CustomButton from "../../components/custom-button/custom-button.component";

import {
  FormContainer,
  ButtonsBarContainer,
  ButtonWrapper,
} from "../../components/Form/form-input/form-input.styles";

import FormInput from "../../components/Form/form-input/form-input.component";

import MainApplication from "./main-application.component";

function ApplicationState() {
  const initialState = {
    warningModal: false,
    step: 1,
    personalDetails: {
      gender: "",
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      birthDay: "date",
      age: "",
      address: {
        suburb: "",
        town: "",
        city: "",
        country: "",
      },
    },
    employmentDetails: {
      companyName: "",
      jobTitle: "",
      jobType: "",
      salary: "",
    },
    proofOfIdentity: {
      driversLicense: false,
      passport: false,
    },
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "warning":
        draft.warningModal = !draft.warningModal;
        return;
      case "nxtStep":
        draft.step++;
        return;
      case "back":
        draft.step--;
        return;
      case "gender":
        draft.personalDetails.gender = action.value;
        return;
      case "fName":
        draft.personalDetails.firstName = action.value;
        return;
      case "lName":
        draft.personalDetails.lastName = action.value;
        return;
      case "mobileNumber":
        draft.personalDetails.mobileNumber = action.value;
        return;
      case "suburb":
        draft.personalDetails.address.suburb = action.value;
        return;
      case "town":
        draft.personalDetails.address.town = action.value;
        return;
      case "city":
        draft.personalDetails.address.city = action.value;
        return;
      case "country":
        draft.personalDetails.address.country = action.value;
        return;
      case "companyName":
        draft.employmentDetails.companyName = action.value;
        return;
      case "jobTitle":
        draft.employmentDetails.jobTitle = action.value;
        return;
      case "jobType":
        draft.employmentDetails.jobType = action.value;
        return;
      case "salary":
        draft.employmentDetails.salary = action.value;
        return;
    }
  }

  const nextStep = () => {
    dispatch({ type: "nxtStep" });
  };

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Fragment>
          <MainApplication />
        </Fragment>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
export default ApplicationState;
