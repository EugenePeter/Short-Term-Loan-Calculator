
import React from "react";
import 'normalize.css';
import './calculator.component.scss';
import { connect } from 'react-redux';


import { createStructuredSelector } from 'reselect'

import { amount } from '../redux/calculator/loan-amount/loan-amount.selectors';

import { schedule } from '../redux/calculator/repayment-amount/repayment-amount.selector';

import { durationOfLoan } from '../redux/calculator/repayment-amount/repayment-amount.selector'


import { apr, repayment } from '../redux/calculator/repayment-amount/repayment-amount.selector'

import RepaymentAmountFigure from './repayment-figure.component';

import TotalRepayment from './total-repayment.component';



const RepaymentAmount = ({ durationOfLoan, amount, schedule, apr, repayment }) => {


    const total = repayment * durationOfLoan;

    console.log("repayment amount is = " + repayment)

    console.log("the apr is = " + apr )

    console.log("The amount is = " + amount)

    console.log("duration is = " + durationOfLoan)

    console.log("from repayment amount" + apr)

    return (
        <div className="payment-amount__container">
            <div className="paymentAmount">
                <RepaymentAmountFigure />  
            </div>
            <div className="paymentAmount">
                <TotalRepayment />
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({ 
    schedule,
    amount,
    durationOfLoan,
    apr,
    repayment
 });

// const mapStateToProps = (state) => {
//     return {
//       apr: apr(state)
//     }
// }

export default connect(mapStateToProps)(RepaymentAmount);