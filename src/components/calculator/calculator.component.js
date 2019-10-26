import React, { Component} from 'react';

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import './calculator.component.scss';

import MonthlyRepayment from './monthlyRepayement.component'



class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            loanAmount: 5000,
            loanDuration: 1
        };
    }

    handleAmountChange = value => {
        
        this.setState({ loanAmount: value});
    };

    handleDurationChange = value => {
        this.setState({ loanDuration: value});
    };






    render() {
        const {loanAmount, loanDuration} = this.state;
        return(
                <div className="Calculator">
                    <div className="Calculator__inner">
                        <div className="Repayment-schedule">
                            <div className="Repayment-schedule__weekly">Weekly</div>
                            <div className="Repayment-schedule__fortnightly">Fornightly</div>
                            <div className="Repayment-schedule__monthly">Monthly</div>  
                        </div>
                        <div className="Input-wrapper">
                            <div className="Input-wrapper__inner">
                                <small>I want to borrow</small>
                                <h4>${loanAmount.toLocaleString('en')}</h4>                  
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
                                <h4>{loanDuration} year{loanDuration > 1 && "s"}</h4>
                                <InputRange
                                    step={1}
                                    maxValue={30}
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