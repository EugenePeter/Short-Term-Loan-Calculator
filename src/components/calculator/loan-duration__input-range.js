import React, { Component, Fragment } from "react";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./calculator.component.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateInput } from "../redux/calculator/loan-duration/loan-duration-actions";

import "normalize.css";

class LoanDurationInputRange extends Component {
  handleDurationChange = (value) => {
    const { updateInput } = this.props;
    updateInput(value);
  };

  render() {
    const {
      loanDuration: {
        input: { txt },
      },
      repaymentSchedule,
    } = this.props;

    const sched = repaymentSchedule.sched;

    const maxTerm = parseInt(repaymentSchedule.term);
    console.log(maxTerm);
    const { children } = this.props;

    console.log();

    return (
      <Fragment>
        {children}
        <h2>
          {txt} {sched}
          {txt > 1 && "s"}
        </h2>
        <InputRange
          step={1}
          maxValue={maxTerm}
          minValue={1}
          value={txt}
          onChange={this.handleDurationChange}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ loanDuration, repaymentSchedule }) => {
  return {
    loanDuration,
    repaymentSchedule,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updateInput,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanDurationInputRange);
