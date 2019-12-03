
import React from "react";
import 'normalize.css';
import './calculator.component.scss';
import { connect } from 'react-redux';


import { createStructuredSelector } from 'reselect'

import { amount } from '../redux/calculator/loan-amount/loan-amount.selectors';

import { schedule } from '../redux/calculator/repayment-amount/repayment-amount.selector';

import { durationOfLoan } from '../redux/calculator/repayment-amount/repayment-amount.selector'


import { apr, repayment } from '../redux/calculator/repayment-amount/repayment-amount.selector'



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
                <small>{`${schedule}ly repayment`}</small>
                <h2>{`${ repayment }`}</h2>
            </div>
            <div className="paymentAmount">
                <small>Total Payment</small>
                <h2>{`${ total }`}</h2>
            </div>
        </div>
    );

    // return (
    //     <div className="payment-amount__container">
    //         <h1> {schedule} </h1>
    //         <h4> {durationOfLoan} </h4>
    //     </div>
    // );
};


// repaymentSchedule, loanAmount, loanDuration 


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