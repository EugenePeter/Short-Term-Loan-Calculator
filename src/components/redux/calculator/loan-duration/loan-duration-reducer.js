// import repaymentScheduleTypes from './repayment-schedule-types';
import  loanDurationTypes  from './loan-duration-types';


const INITIAL_STATE = {

  input: {
    //  txt: 4,
  }
    
}


const loanDurationReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case loanDurationTypes.UPDATE_INPUT:
            return { 
                ...state,
                input: action.payload
             }

        default:
            return state
    }
    return state
}

export default loanDurationReducer;

