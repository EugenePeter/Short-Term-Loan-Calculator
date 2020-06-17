import React, { Component, Fragment } from "react";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./calculator.component.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateAmountInput } from "../redux/calculator/loan-amount/loan-amount-action";

import { amount } from "../redux/calculator/loan-amount/loan-amount.selectors";

import { createStructuredSelector } from "reselect";

import "normalize.css";

class LoanAmount extends Component {
  handleAmountChange = (value) => {
    const { updateAmountInput } = this.props;
    updateAmountInput(value);
    console.log("amount input is " + updateAmountInput);
  };

  render() {
    const { amount } = this.props;
    const { children } = this.props;

    return (
      <Fragment>
        {children}
        <h2>${amount}</h2>
        <InputRange
          step={100}
          maxValue={5000}
          minValue={100}
          value={amount}
          onChange={this.handleAmountChange}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  amount,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updateAmountInput,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanAmount);
