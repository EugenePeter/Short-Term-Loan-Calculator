import React, { Component } from "react";

import "./calculator.component.scss";

import LoanAmount from "./loan-amount.component";
import LoanDuration from "./loan-duration.component";
import RepaymentAmount from "./repayment-amount.component";

import RepaymentSchedule from "./repayment-schedule.component";

import CustomButton from "../custom-button/custom-button.component";
import GetStarted from "./get-started.component";

import { Link, Switch, Route, Redirect, withRouter } from "react-router-dom";
import "normalize.css";

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

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getStarted: false,
      continue: false,
    };
  }

  handleGetStarted = (event, props) => {
    const { getStarted } = this.state;
    const clicked = this.state.continue;
    this.setState({ getStarted: !getStarted });
    this.setState({ continue: !clicked });

    // return <Redirect to="main/application" />;
    this.props.history.push("/apply");
  };

  render() {
    const clicked = this.state.continue;
    const { getStarted } = this.state;
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
                onClick={this.handleGetStarted}
                isActive={getStarted}
                calculatorBtn
              >
                Get Started
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Calculator);
