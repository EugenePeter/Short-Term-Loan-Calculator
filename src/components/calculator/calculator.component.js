import React, { Component} from 'react';

import './calculator.component.scss';

import LoanAmount from './loan-amount.component';
import LoanDuration from './loan-duration.component';
import RepaymentAmount from './repayment-amount.component'

import  RepaymentSchedule from './repayment-schedule.component';


import 'normalize.css';




class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            repaymentSchedule: '',
        };
    }
x
    handleRepaymentSchedule = event => {
        event.preventDefault();
        const { value } = event.target;

        alert(value)
        console.log(value)
        this.setState({repaymentSchedule: value})
    }

    
    render() {

        return(
        <div className="Calculator">
            <div className="Calculator__inner">
                <RepaymentSchedule />
                <div className="Input-wrapper"> 
                    <div className="Input-wrapper__inner">
                        <LoanAmount />
                        <LoanDuration />
                    </div>
                    <div className="Input-wrapper__inner">
                        <RepaymentAmount />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Calculator;