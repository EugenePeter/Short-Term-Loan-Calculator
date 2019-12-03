import { createSelector } from 'reselect';

const selectAmount = state => state.loanAmount;

export const amount = createSelector(
    [selectAmount],
    loanAmount => loanAmount.input.amount
);

