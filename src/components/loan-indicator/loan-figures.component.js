import React from "react";
import { withRouter } from "react-router-dom";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { useImmer } from "use-immer";

import { durationOfLoan, schedule, repayment, total, amount } from "../redux/calculator/repayment-amount/repayment-amount.selector";

import { LoanFigureContainer } from "./loan-figures.styles";

function LoanFigures(props) {
  const { amount, durationOfLoan, schedule, repayment, total } = props;
  // const account = props.account;

  return (
    <LoanFigureContainer>
      <h1>{repayment}</h1>
      <h5>next payment</h5>
      <h2> {amount} </h2>
      <h5>loan amount</h5>
    </LoanFigureContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  amount,
  durationOfLoan,
  schedule,
  repayment,
  total,
});

export default connect(mapStateToProps)(withRouter(LoanFigures));
