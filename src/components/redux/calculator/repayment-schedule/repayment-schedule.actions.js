import testTypes from './repayment-schedule-types';

export const testAction = () => ({
    type: testTypes.TEST,
    payload: 'jennifer',
    month: 8
});

export const testActionTwo = () => ({
    type: testTypes.TEST,
    payload: '32',
    month: 8
});


export const month = () => ({
    type: testTypes.TEST,
    payload: '8',
    schedule: 'month'
});

export const fortnightAction = () => ({
    type: testTypes.TEST,
    payload: '16',
    schedule: 'fornight'
});

export const weekAction = () => ({
    type: testTypes.TEST,
    payload: '32',
    schedule: 'Week'
});


