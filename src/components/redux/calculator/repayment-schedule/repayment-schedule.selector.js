import { createSelector } from "reselect";

const repaymentSched = (state) => state.repaymentSchedule;

// const loanAmount = state => state.loanAmount;

export const apr = createSelector(
  [repaymentSched],
  (repaymentSchedule) => repaymentSchedule.aprValuess
);

export const schedule = createSelector(
  [repaymentSched],
  (repaymentSchedule) => repaymentSchedule.sched
);
