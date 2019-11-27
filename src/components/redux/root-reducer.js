import { combineReducers } from 'redux';

import testReducer from '../redux/calculator/repayment-schedule/repayment-schedule-reducer';

import loanDurationReducer from '../redux/calculator/loan-duration/loan-duration-reducer'

export default combineReducers({
    test: testReducer,
    loanDuration: loanDurationReducer
});