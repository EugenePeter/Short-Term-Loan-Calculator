
import React from "react";
import 'normalize.css';
import './calculator.component.scss';


const RepaymentAmount = () => {

    return (
            <div className="payment-amount__container">
                <div className="paymentAmount">
                    <small>{text}</small>
                    <h2>{calculateMonthlyPayment.toLocaleString('en')}</h2>
                </div>
                <div className="paymentAmount">
                    <small>Total payment</small>
                    <h2>{Total.toLocaleString('en')}</h2>
                </div>
            </div>

    );
};



export default RepaymentAmount;