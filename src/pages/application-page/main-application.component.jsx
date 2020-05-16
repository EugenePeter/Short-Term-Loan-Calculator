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

import Requirements from "./requirement.component";
import IdentificationRequirement from "./IdentificationDetails.component";

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
      return <Requirements />;
    case 3:
      return <IdentificationRequirement />;
    default:
  }
}

export default MainApplication;
