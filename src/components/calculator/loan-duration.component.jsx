import React, { Component} from 'react';

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import './calculator.component.scss';


import MonthlyRepayment from './monthlyRepayement.component'

class LoanDuration extends Component {
    constructor() {
        super();

        this.state = {
            loanDuration: ''
        };
    }

    handleDurationChange = value => {
        this.setState({ loanDuration: value});
    };




    render() {
        const {loanDuration} = this.state;
        const {lAmount} = this.props;
        return (
            <div>
                <small>Over </small>
                <h2>{loanDuration} month{loanDuration > 1 && "s"}</h2>
                <InputRange
                    step={1}
                    maxValue={7}
                    minValue={1}
                    value={loanDuration}
                    onChange={this.handleDurationChange}
                />

                <div className="Input-wrapper__inner">
                    <MonthlyRepayment amount={lAmount} years={ loanDuration }/>
                </div>
             
            </div>
        );
    }
}

export default LoanDuration;

