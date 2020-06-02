import { createSelector } from "reselect";

const repaymentSched = (state) => state.repaymentSchedule;
const loanDuration = (state) => state.loanDuration;
const selectAmount = (state) => state.loanAmount;

// const loanAmount = state => state.loanAmount;

export const apr = createSelector(
  [repaymentSched],
  (repaymentSchedule) => repaymentSchedule.aprValuess
);

export const schedule = createSelector(
  [repaymentSched],
  (repaymentSchedule) => repaymentSchedule.sched
);

export const durationOfLoan = createSelector(
  [loanDuration],
  (loanDuration) => loanDuration.input.txt
);

export const amount = createSelector(
  [selectAmount],
  (loanAmount) => loanAmount.input.amount
);

export const a = createSelector(
  [apr, durationOfLoan],
  (apr, durationOfLoan) => Math.pow(1 + apr, durationOfLoan) - 1
);

export const b = createSelector(
  [apr, durationOfLoan],
  (apr, durationOfLoan) => Math.pow(1 + apr, durationOfLoan) * apr
);

export const discountFactor = createSelector(
  [a, b],
  (a, b) => a / b
);

export const repayment = createSelector(
  [discountFactor, amount],
  (discountFactor, amount) => Math.round(amount / discountFactor)
);

export const total = createSelector(
  [repayment, durationOfLoan],
  (repayment, durationOfLoan) => repayment * durationOfLoan
);
