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
            <div className="App-header">
                <div className="Calculator">
                    <div className="Input-wrapper">
                        <h4>${loanAmount.toLocaleString('en')}</h4>                  
                        <small>I want to borrow</small>
                        <InputRange
                            step={100}
                            maxValue={100000}    
                            minValue={100}
                            value={loanAmount}
                            onChange={this.handleAmountChange}
                        />
                    </div>
                    <div  className="Input-wrapper">
                        <h4>{loanDuration} year{loanDuration > 1 && "s"}</h4>
                        <small>Over </small>
                        <InputRange
                            step={1}
                            maxValue={30}
                            minValue={1}
                            value={loanDuration}
                            onChange={this.handleDurationChange}
                        />
                    </div>
                    <div className="Input-wrapper">
                        <MonthlyRepayment years={ loanDuration } amount={loanAmount} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;