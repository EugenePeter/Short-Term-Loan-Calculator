import repaySchedTypes from './repayment-schedule-types';

export const month = () => ({
    type: repaySchedTypes.REPAYSCHED,
    payload: '8',
    schedule: 'Month',
    aprValue: 12
});

export const fortnightAction = () => ({
    type: repaySchedTypes.REPAYSCHED,
    payload: '16',
    schedule: 'Fornight',
    aprValue: 24
});

export const weekAction = () => ({
    type: repaySchedTypes.REPAYSCHED,
    payload: '32',
    schedule: 'Week',
    aprValue: 48
});


