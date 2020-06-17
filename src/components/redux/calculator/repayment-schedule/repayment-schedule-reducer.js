// import repaymentScheduleTypes from './repayment-schedule-types';
import repaySchedTypes from "./repayment-schedule-types";

const INITIAL_STATE = {
  week: {
    scheduleValue: 32,
    aprValue: 48,
    scheduleName: "Week",
    i: 1,
    id: 1,
    maximumTerm: 32,
  },

  fornight: {
    scheduleValue: 16,
    aprValue: 24,
    scheduleName: "Fornight",
    i: 2,
    id: 2,
    maxTerm: 16,
  },

  month: {
    scheduleValue: 8,
    aprValue: 12,
    scheduleName: "Month",
    i: 3,
    id: 3,
    maxTerm: 8,
  },

  maxTerm: {
    term: "8",
  },

  APR: {
    value: 1.697,
  },

  sched: "Month",

  term: 8,

  aprValuess: 0.14141666666666666,
};

const repaySchedReducer = (state = INITIAL_STATE, action) => {
  // const ff = state.APR
  // const dd = ff.value

  const {
    APR: { value },
  } = state;
  console.log("reducer" + value);
  switch (action.type) {
    case repaySchedTypes.REPAYSCHED:
      return {
        ...state,
        term: action.payload,
        sched: action.schedule,
        aprValuess: value / action.aprValue,
      };

    default:
      return state;
  }
  // return state;
};

export default repaySchedReducer;
