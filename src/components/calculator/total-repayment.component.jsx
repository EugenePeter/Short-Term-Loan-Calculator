import React, { Fragment } from "react";
import "normalize.css";
import "./calculator.component.scss";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import {
  repayment,
  durationOfLoan,
} from "../redux/calculator/repayment-amount/repayment-amount.selector";

const TotalRepayment = ({ durationOfLoan, repayment }) => {
  const total = repayment * durationOfLoan;

  return (
    <Fragment>
      <small>Total Payment</small>
      <h2>{`${total}`}</h2>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  durationOfLoan,
  repayment,
});

export default connect(mapStateToProps)(TotalRepayment);
