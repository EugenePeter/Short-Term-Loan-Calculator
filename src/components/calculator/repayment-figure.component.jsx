import React, { Fragment } from "react";
import "normalize.css";
import "./calculator.component.scss";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { amount } from "../redux/calculator/loan-amount/loan-amount.selectors";

import {
  schedule,
  repayment,
} from "../redux/calculator/repayment-amount/repayment-amount.selector";

const RepaymentAmountFigure = ({
  durationOfLoan,
  amount,
  schedule,
  apr,
  repayment,
}) => {
  return (
    <Fragment>
      <small>{`${schedule}ly repayment`}</small>
      <h2>{`${repayment}`}</h2>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  amount,
  schedule,
  repayment,
});

export default connect(mapStateToProps)(RepaymentAmountFigure);
