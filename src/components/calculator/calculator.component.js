import React, { Component} from 'react';

// import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import './calculator.component.scss';

import LoanAmount from './loan-amount.component';


import 'normalize.css';



class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            loanDuration: 1,
            repaymentSchedule: ''
        };
    }



    handleDurationChange = value => {
        this.setState({ loanDuration: value});
    };

    handleRepaymentSchedule = event => {
        event.preventDefault();
        const { value } = event.target;
        this.setState({repaymentSchedule: value });
        console.log(value);
        console.log(this.state);
        alert("test")
    }






    render() {
        // const {loanDuration } = this.state;
        return(
                <div className="Calculator">
                    <div className="Calculator__inner">
                        <div className="Repayment-schedule">
                            <button 
                                className="Repayment-schedule__weekly" 
                                onClick={ this.handleRepaymentSchedule} value="weekly">Weekly
                            </button> 
                            <button 
                                className="Repayment-schedule__fornightly" 
                                onClick={ this.handleRepaymentSchedule} value="weekly">Fornightly
                            </button> 
                            <button 
                                className="Repayment-schedule__monthly" 
                                onClick={ this.handleRepaymentSchedule} value="weekly">Monthly
                            </button> 
                        </div>

                        <div className="Input-wrapper">
                            <LoanAmount />
                        </div>
                    </div>
                </div>
        );
    }
}

export default Calculator;