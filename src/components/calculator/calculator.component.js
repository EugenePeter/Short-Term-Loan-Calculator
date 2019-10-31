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
        // event.preventDefault();
        const { value } = event.target;
        this.setState({repaymentSchedule: value });
        console.log(value);
        console.log(this.state);
    }






    render() {
        // const {loanDuration } = this.state;
        return(
                <div className="Calculator">
                    <div className="Calculator__inner">
                        <div className="Repayment-schedule">
                            <div className="Repayment-schedule__weekly" >
                                <button onClick={ this.handleRepaymentSchedule} value="weekly">Weekly</button> 
                            </div>
                            <div className="Repayment-schedule__fortnightly">Fornightly</div>
                            <div className="Repayment-schedule__monthly">Monthly</div>  
                        </div>

                        <div className="Input-wrapper">
                            <div className="Input-wrapper__inner">
                                <LoanAmount />
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Calculator;