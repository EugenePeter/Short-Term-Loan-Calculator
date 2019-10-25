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
                <h4>I want to borrow ${loanAmount}</h4>
                <InputRange
                    step={100}
                    maxValue={100000}    
                    minValue={100}
                    value={loanAmount}
                    onChange={this.handleAmountChange}
                />
                <h4>Over {loanDuration} month{loanDuration > 1 && "s"}</h4>
                <InputRange
                    step={1}
                    maxValue={30}
                    minValue={1}
                    value={loanDuration}
                    onChange={this.handleDurationChange}
                />
                <MonthlyRepayment years={ loanDuration } amount={loanAmount} />
            </div>
        );
    }
}

export default Calculator;