import { combineReducers } from 'redux';

import testReducer from '../redux/calculator/repayment-schedule/repayment-schedule-reducer';

import loanDurationReducer from '../redux/calculator/loan-duration/loan-duration-reducer'

import loanAmountReducer from '../redux/calculator/loan-amount/loan-amount-reducer'

export default combineReducers({
    test: testReducer,
    loanDuration: loanDurationReducer,
    loanAmount : loanAmountReducer
});