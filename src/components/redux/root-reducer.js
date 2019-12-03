import { combineReducers } from 'redux';

import repaySchedReducer from '../redux/calculator/repayment-schedule/repayment-schedule-reducer';

import loanDurationReducer from '../redux/calculator/loan-duration/loan-duration-reducer'

import loanAmountReducer from '../redux/calculator/loan-amount/loan-amount-reducer'

export default combineReducers({
    repaymentSchedule: repaySchedReducer,
    loanDuration: loanDurationReducer,
    loanAmount : loanAmountReducer
});