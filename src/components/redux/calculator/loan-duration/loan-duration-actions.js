import loanDurationTypes from './loan-duration-types';

export const updateInput = (input) => ({
    type: loanDurationTypes.UPDATE_INPUT,
    payload: {
        txt: input, 
        len: input
    }
});

