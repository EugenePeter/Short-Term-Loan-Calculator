
import React, { Fragment } from "react";
import 'normalize.css';
import './calculator.component.scss';
import { connect } from 'react-redux';


import { createStructuredSelector } from 'reselect'

import { schedule, repayment } from '../redux/calculator/repayment-amount/repayment-amount.selector';


const RepaymentAmountFigure = ({ durationOfLoan, amount, schedule, apr, repayment }) => {

    return (

        <Fragment>
            <small>{`${schedule}ly repayment`}</small>
            <h2>{`${ repayment }`}</h2>
        </Fragment>
    );
};

const mapStateToProps = createStructuredSelector({ 
    schedule,
    repayment
});

export default connect(mapStateToProps)(RepaymentAmountFigure);