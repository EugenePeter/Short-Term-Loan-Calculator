import { createSelector } from 'reselect';

const selectAmountandSched = state => state.cart;

export const selectSched  = createSelector(
    [selectAmountandSched],
    loanDuration => loanDuration.input

);

export const selectAmount = createSelector(
    [selectAmountandSched],
    loanAmount => loanAmount.input

);


export  const selectAmountandSchedCompute = createSelector(
    [selectAmount, selectSched],
    (input) => 


)

const selectAmount = state => state.loanAmount;
const selectSched = state => state.loanDuration;

export const selectComputeApr = createSelector(
    [selectAmount,selectSched],
    (loanAmount, loanDuration) =>  
)