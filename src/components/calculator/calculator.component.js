import React, { Component} from 'react';

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import './calculator.component.scss';

import MonthlyRepayment from './monthlyRepayement.component'

import 'normalize.css';



class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            loanAmount: 5000,
            loanDuration: 1,
            repaymentSchedule: ''
        };
    }

    handleAmountChange = value => {
        this.setState({ loanAmount: value});
        console.log(this.state.loanAmount)
    };

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
        const {loanAmount, loanDuration,  } = this.state;
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
                                <small>I want to borrow</small>
                                <h2>${loanAmount.toLocaleString('en')}</h2>                  
                                <InputRange
                                    step={100}
                                    maxValue={100000}    
                                    minValue={100}
                                    value={loanAmount}
                                    onChange={this.handleAmountChange}
                                />
                            </div>
                            <div  className="Input-wrapper__inner">
                                <small>Over </small>
                                <h2>{loanDuration} month{loanDuration > 1 && "s"}</h2>
                                <InputRange
                                    step={1}
                                    maxValue={7}
                                    minValue={1}
                                    value={loanDuration}
                                    onChange={this.handleDurationChange}
                                />
                            </div>
                            <div className="Input-wrapper__inner">
                                <MonthlyRepayment years={ loanDuration } amount={loanAmount} />
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Calculator;