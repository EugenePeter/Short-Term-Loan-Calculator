
import React from "react";
import 'normalize.css';
import './calculator.component.scss';
import { connect } from 'react-redux'


const RepaymentAmount = ({ test }) => {
    const dd = test.aprValuess
    console.log("from repayment amount" + dd)
    return (
            <div className="payment-amount__container">
                <h4>{dd}</h4>
            </div>

    );
};


const mapStateToProps = ({ test }) => {
    return {
        test
    }
}


export default connect(mapStateToProps)(RepaymentAmount);