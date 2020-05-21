import React, { Component, Fragment } from "react";

import "normalize.css";
import Calculator from "../../components/calculator/calculator.component";

import { Container, Small, Wrapper } from "../../global-styles/global.styles";

import {
  UpdateLoanContainer,
  UpdateLoan,
  InputWrapper,
  InputWrapperInner,
  ContinueBtn,
  WarningContainer,
  WarningInner,
} from "./application-page.styles";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../components/redux/user/user.selectors";

import RepaymentAmountFigure from "../../components/calculator/repayment-figure.component";

import TotalRepayment from "../../components/calculator/total-repayment.component";

import RepaymentSchedule from "../../components/calculator/repayment-schedule.component";

import LoanAmount from "../../components/calculator/loan-amount.component";

import LoanDuration from "../../components/calculator/loan-duration.component";

import CustomButton from "../../components/custom-button/custom-button.component";

import Warning from "./warning.component";

import { amount } from "../../components/redux/calculator/loan-amount/loan-amount.selectors";

class ApplicationPage extends Component {
  constructor() {
    super();

    this.state = {
      continue: false,
    };
  }

  handleContinue = (event) => {
    const clicked = this.state.continue;
    event.preventDefault();
    this.setState({ continue: !clicked });
  };

  render() {
    const clicked = this.state.continue;
    const {
      selectCurrentUser: { displayName },
      amount,
    } = this.props;
    console.log(displayName);
    return (
      <Container>
        <Wrapper>
          <small> Hi {displayName} </small>
          <h2>you are borrowing</h2>
          <h2>${amount}</h2>
          <RepaymentAmountFigure />
          <TotalRepayment />
          <Small className="margin-top">
            {" "}
            You can update loan amount, repayment schedule and duration below
          </Small>
        </Wrapper>
        <UpdateLoanContainer>
          <UpdateLoan>
            <RepaymentSchedule />
            <InputWrapper>
              <InputWrapperInner>
                <LoanAmount />
                <LoanDuration />
              </InputWrapperInner>
            </InputWrapper>
          </UpdateLoan>
          <ContinueBtn
            className="clicked"
            onClick={this.handleContinue}
            clicked={clicked}
          >
            CONTINUE
          </ContinueBtn>
        </UpdateLoanContainer>
        <WarningContainer clicked={clicked}>
          <WarningInner>
            <Warning />
          </WarningInner>
        </WarningContainer>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  selectCurrentUser,
  amount,
});

export default connect(mapStateToProps)(ApplicationPage);
