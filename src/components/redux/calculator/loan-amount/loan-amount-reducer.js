// import repaymentScheduleTypes from './repayment-schedule-types';
import  loanAmountTypes  from './loan-amount-types';


const INITIAL_STATE = {

    input : {
        amount: 4
    }
}


const loanAmountReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case loanAmountTypes.UPDATE_INPUT_AMOUNT:
            return { 
                input: action.payload
            }

        default:
            return state
    }
    return state
}

export default loanAmountReducer;

