import React, { Component} from 'react';

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import './calculator.component.scss';

// import LoanDuration from './loan-duration.component';

import MonthlyRepayment from './monthlyRepayement.component'

import 'normalize.css';

class LoanAmount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loanAmount: 5000,
            loanDuration: 2,
            maxTerm: 'Monthly'
        };
    }

    handleAmountChange = value => {
        this.setState({ loanAmount: value});
        console.log(this.state.loanAmount)
    };

    handleDurationChange = value => {
        this.setState({ loanDuration: value});
    };




    render() {
        const {loanAmount, loanDuration } = this.state;
        const { maximumTerm, repaymentSchedule } = this.props;
        return(
            <div className="Input-wrapper__inner">
                <small>I want to borrow</small>
                <h2>${loanAmount.toLocaleString('en')}</h2>                  
                <InputRange
                step={100}
                maxValue={5000}    
                minValue={100}
                value={loanAmount}
                onChange={this.handleAmountChange}
                />
                

                <small>Over </small>
                <h2>{loanDuration} {repaymentSchedule}{loanDuration > 1 && "s"}</h2>
                <InputRange
                    step={1}
                    maxValue={maximumTerm}
                    minValue={1}
                    value={loanDuration}
                    onChange={this.handleDurationChange}
                />

                <div className="Input-wrapper__inner">
                    <MonthlyRepayment amount={loanAmount} years={ loanDuration }/>
                </div>
            </div>
        );
    }

}

export default LoanAmount;



