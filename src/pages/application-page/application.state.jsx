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
    loanPurpose: "",
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
      employerContactNumber: "",
      jobTitle: "",
      employmentDate: "date",
      jobType: "",
      paySchedule: "",
      salary: "",
    },

    expenses: {
      rentOrMortageSchedule: "Week",
      totalBills: "",
      totalLivingExpenseSchedule: "",
      totalLivingExpenses: "",
    },
    nextOfKin: {
      relationship: "",
      firstName: "",
      lastName: "",
      contactNumber: "",
    },
    proofOfIdentity: {
      driversLicense: false,
      passport: false,
    },
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "loanPurpose":
        draft.loanPurpose = action.value;
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
      case "birthday":
        draft.personalDetails.birthDay = action.value;
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
      case "employerContactNumber":
        draft.employmentDetails.employerContactNumber = action.value;
        return;
      case "employmentDate":
        draft.employmentDetails.employmentDate = action.value;
        return;
      case "paySchedule":
        draft.employmentDetails.paySchedule = action.value;
        return;
      case "rentOrMortageSchedule":
        draft.expenses.rentOrMortageSchedule = action.value;
        return;
      case "totalBills":
        draft.expenses.totalBills = action.value;
        return;
      case "totalLivingExpenseSchedule":
        draft.expenses.totalLivingExpenseSchedule = action.value;
        return;
      case "totalLivingExpenses":
        draft.expenses.totalLivingExpenses = action.value;
        return;
      case "kinRelationship":
        draft.nextOfKin.relationship = action.value;
        return;
      case "kinFName":
        draft.nextOfKin.firstName = action.value;
        return;
      case "kinLName":
        draft.nextOfKin.lastName = action.value;
        return;
      case "kinContactNumber":
        draft.nextOfKin.contactNumber = action.value;
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
