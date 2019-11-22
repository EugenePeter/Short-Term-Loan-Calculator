// import repaymentScheduleTypes from './repayment-schedule-types';
import  testTypes  from './repayment-schedule-types';


const INITIAL_STATE = {

    week: {
        scheduleValue: 32,
        aprValue: 48,
        scheduleName: 'Week',
        i: 1,
        id: 1,
        maximumTerm: 32
    },

    fornight: {
        scheduleValue: 16,
        aprValue: 24,
        scheduleName: 'Fornight',
        i: 2,
        id: 2,
        maxTerm: 16
    },

    month: {
        scheduleValue: 8,
        aprValue: 12,
        scheduleName: 'Month',
        i: 3,
        id: 3,  
        maxTerm: 8
    },

    a: {
        child: 4,
        name: "jenny3"
    },
    maxTerm: ''
    
}


const testReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case testTypes.TEST:
            return {
                ...state,
                name: action.payload,
                maxTerm: action.month
            }

        default:
            return state;
    }
    // return state;

}

export default testReducer;

