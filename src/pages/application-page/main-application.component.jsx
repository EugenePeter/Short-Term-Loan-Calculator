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

import "normalize.css";

import { Small } from "../../global-styles/global.styles";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import FormInput from "../../components/Form/form-input/form-input.component";

import UserDetails from "./user-details.component";
import Requirement from "./requirement";
import Address from "./address.page";
import EmploymentDetails from "./employment-details.page";
import Expenses from "./expenses.page";

import { Form, Field } from "react-final-form";

import {
  FormContainer,
  ButtonsBarContainer,
} from "../../components/Form/form-input/form-input.styles";

import CustomButton from "../../components/custom-button/custom-button.component";

import {
  auth,
  addUserApplication,
} from "../../components/firebase/firebase.utils";

import LoanData from "./data";

function MainApplication() {
  const appState = useContext(StateContext);

  const currentStep = appState.step;

  switch (currentStep) {
    case 1:
      return <UserDetails />;
    case 2:
      return <Address />;
    case 3:
      return <EmploymentDetails />;
    case 4:
      return <Expenses />;

    // case 4:
    //   return <EmploymentDetails />;
    default:
  }
}

export default MainApplication;
