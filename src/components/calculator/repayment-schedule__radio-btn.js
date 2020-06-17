import React, { Component, Fragment } from "react";
import { createStructuredSelector } from "reselect";

import { schedule } from "../redux/calculator/repayment-schedule/repayment-schedule.selector";

import "react-input-range/lib/css/index.css";
import "./calculator.component.scss";

import { RadioContainer } from "../Form/tabs-component/RadioInputBlock.styles";

// import {
//   Radio,
//   RadioBlock,
//   RadioBlockWrapper,
//   RadioInput,
//   CheckMark,
//   RadioContainer,
// } from "./repayment-schedule_radio-btn.styles";

import RadioBlockComponent from "../../components/Form/tabs-component/RadioBlock.component";

import {
  month,
  fortnightAction,
  weekAction,
} from "../redux/calculator/repayment-schedule/repayment-schedule.actions";

import { connect } from "react-redux";

import "normalize.css";

class RepaymentScheduleRadioBtn extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }
  handleDurationChange = (value) => {
    const { updateInput } = this.props;
    updateInput(value);
  };

  render() {
    const {
      week,
      fornight,
      month,
      repaymentSchedule,
      sched,
      fornightSched,
      weekSched,
      monthSched,
    } = this.props;

    const monthValue = repaymentSchedule.maxTerm.term;

    const weekly = week.scheduleName;
    const fornightly = fornight.scheduleName;
    const monthly = month.scheduleName;

    console.log(this.props);
    console.log(monthValue);
    console.log(sched);

    const { aprValue, i, id } = this.props;

    const handleClick = (e) => {
      const value = e.target.value;
      const { clicked } = this.state;
      if (value === "week") {
        weekSched();
        this.setState({ clicked: !clicked });
      }
      if (value === "fornight") {
        fornightSched();
      }
      if (value === "month") {
        monthSched();
      }
    };

    return (
      <Fragment>
        <RadioContainer onClick={handleClick}>
          <h4 style={{ textAlign: "center", marginBottom: ".5rem" }}>I will pay every</h4>
          <small style={{ textAlign: "center", marginBottom: ".5rem" }}>
            Pick a repayment schedule
          </small>
          <RadioBlockComponent label="Week" value="week" name="schedule" />
          <RadioBlockComponent label="Fornight" value="fornight" name="schedule" />
          <RadioBlockComponent label="Month" value="month" name="schedule" />
        </RadioContainer>
      </Fragment>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   schedule,
// });

const mapStateToProps = ({
  repaymentSchedule: { week, fornight, month, b, sched },
  repaymentSchedule,
  loanDuration,
  loanAmount,
}) => {
  return {
    week,
    fornight,
    month,
    b,
    repaymentSchedule,
    sched,
    loanDuration,
    loanAmount,
  };
};
const mapDispatchToProps = (dispatch) => ({
  monthSched: () => dispatch(month()),
  fornightSched: () => dispatch(fortnightAction()),
  weekSched: () => dispatch(weekAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepaymentScheduleRadioBtn);
