import React, {
  Component,
  Fragment,
  useState,
  useEffect,
  useContext,
} from "react";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import "./calculator.component.scss";

import LoanAmount from "./loan-amount.component";
import LoanDuration from "./loan-duration.component";
import RepaymentAmount from "./repayment-amount.component";
import RepaymentSchedule from "./repayment-schedule.component";
import CustomButton from "../custom-button/custom-button.component";
import GetStarted from "./get-started.component";

import { Link, Switch, Route, Redirect, withRouter } from "react-router-dom";
import "normalize.css";

import { useImmer } from "use-immer";

import {
  UpdateLoanContainer,
  UpdateLoan,
  InputWrapper,
  InputWrapperInner,
  ContinueBtn,
  WarningContainer,
  WarningInner,
} from "../../pages/application-page/application-page.styles";

import Warning from "../../pages/application-page/warning.component";

function Calculator() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const [state, setState] = useImmer({
    getStarted: false,
    continue: false,
    warning: false,
  });

  const handleGetStarted = (e) => {
    const appDispatch = useContext(DispatchContext);
    e.preventDefault();
    // appDispatch({ type: "warning" });
    alert();
  };

  return (
    <div className="Calculator">
      <div className="Calculator__inner">
        <RepaymentSchedule />
        <div className="Input-wrapper">
          <div className="Input-wrapper__inner">
            <LoanAmount />
            <LoanDuration />
          </div>
          <div className="Input-wrapper__inner">
            <RepaymentAmount />
          </div>
          <div className="Input-wrapper__inner">
            <CustomButton
              onClick={handleGetStarted}
              isActive={state.getStarted}
              calculatorBtn
            >
              Get Started
            </CustomButton>
          </div>
        </div>
      </div>
      <WarningContainer clicked={state.continue}>
        <WarningInner>
          <Warning />
        </WarningInner>
      </WarningContainer>
      <GetStarted isActive={state.getStarted} />
    </div>
  );
}

export default withRouter(Calculator);
