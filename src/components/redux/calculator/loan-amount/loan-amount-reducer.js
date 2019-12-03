// import repaymentScheduleTypes from './repayment-schedule-types';
import  loanAmountTypes  from './loan-amount-types';


const INITIAL_STATE = {

    input : {
        amount: 2000
    }
}


const loanAmountReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case loanAmountTypes.UPDATE_INPUT_AMOUNT:
            return { 
                ...state,
                input: action.payload
            }

        default:
            return state
    }
}

export default loanAmountReducer;

