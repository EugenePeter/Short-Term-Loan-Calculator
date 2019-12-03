
import React from "react";
import 'normalize.css';
import './calculator.component.scss';
import { connect } from 'react-redux'


const RepaymentAmount = ({ repaymentSchedule, loanAmount:{input},  loanDuration }) => {
    const apr = repaymentSchedule.aprValuess;
    const amount = input.amount;
    const duration = loanDuration.input.txt;
    const schedule = repaymentSchedule.sched;

    const a = Math.pow(1 + apr,duration ) - 1;
    const b = Math.pow(1 + apr, duration ) * apr;
    const discountFactor = a / b;
    const repayment = Math.round(amount / discountFactor);

    const total = repayment * duration;

    console.log("repayment amount = " + repayment)

    console.log("apr = " + apr )

    console.log("amount = " + amount)

    console.log("duration = " + duration)


    
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
};





const mapStateToProps = ({ repaymentSchedule, loanAmount, loanDuration }) => {
    return {
        repaymentSchedule,
        loanAmount,
        loanDuration
    }
}


export default connect(mapStateToProps)(RepaymentAmount);