import React, { Component, Fragment } from "react";

import "normalize.css";
// import Calculator from "../../components/calculator/calculator.component";

import { Container, Small, Wrapper } from "../../global-styles/global.styles";

import {
  UpdateLoanContainer,
  UpdateLoan,
  InputWrapper,
  InputWrapperInner,
  Modifiers,
} from "./application-page.styles";

import { TitleContainer } from "../../global-styles/global.styles";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../components/redux/user/user.selectors";
import RepaymentAmountFigure from "../../components/calculator/repayment-figure.component";
import TotalRepayment from "../../components/calculator/total-repayment.component";
import RepaymentSchedule from "../../components/calculator/repayment-schedule.component";
import LoanAmount from "../../components/calculator/loan-amount.component";
import LoanDuration from "../../components/calculator/loan-duration.component";
import LoanDurationInputRange from "../../components/calculator/loan-duration__input-range";
import RepaymentScheduleRadioBtn from "../../components/calculator/repayment-schedule__radio-btn";
import { amount } from "../../components/redux/calculator/loan-amount/loan-amount.selectors";

import RepaymentAmount from "../../components/calculator/repayment-amount.component";
// import { Modifier } from "./loan-indicator.styles";

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
    const { children } = this.props;
    return (
      <Fragment>
        <Modifiers />
        <Container>
          <Wrapper className="Wrapper__margin-top">
            <TitleContainer>
              <small> You can update loan amount, repayment schedule and duration below</small>
            </TitleContainer>
          </Wrapper>
        </Container>
        <Modifiers />
        <div className="flex-row border padding-t-b">
          <RepaymentAmount />
        </div>
        <RepaymentScheduleRadioBtn />

        <div className="flex-row margin-t">
          <LoanAmount>
            <h4>I want to borrow</h4>
          </LoanAmount>
        </div>
        <div className="flex-row margin-t">
          <LoanDurationInputRange>
            <small style={{ textAlign: "center", marginBottom: ".5rem" }}>
              How long are going to repay the loan?
            </small>
          </LoanDurationInputRange>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  selectCurrentUser,
  amount,
});

export default connect(mapStateToProps)(ApplicationPage);
