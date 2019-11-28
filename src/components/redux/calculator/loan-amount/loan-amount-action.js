import loanAmountTypes from './loan-amount-types';

export const updateAmountInput = (input) => ({
    type: loanAmountTypes.UPDATE_INPUT_AMOUNT,
    payload: {
        amount: input
    }
});

