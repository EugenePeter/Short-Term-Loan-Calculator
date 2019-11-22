import { combineReducers } from 'redux';

import testReducer from '../redux/calculator/repayment-schedule/repayment-schedule-reducer';

export default combineReducers({
    test: testReducer
});