import React, { Component} from 'react';

// import InputRange from "react-input-range";
import './calculator.component.scss';

// import LoanAmount from './loan-amount.component';

import  RepaymentSchedule from './repayment-schedule.component';


import 'normalize.css';




class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            // loanDuration: 1,
            repaymentSchedule: '',
        };
    }



    // handleDurationChange = value => {
    //     this.setState({ loanDuration: value});
    // };

    handleRepaymentSchedule = event => {
        event.preventDefault();
        const { value } = event.target;
        // this.setState({repaymentSchedule: value });
        // console.log(value);
        // console.log(this.state);
        // alert("test")
        alert(value)
        console.log(value)
        this.setState({repaymentSchedule: value})
    }

    





    render() {
        // const {loanDuration } = this.state;
        // const { repaymentSchedule }  = this.state;
        return(
        <div className="Calculator">
            <div className="Calculator__inner">
                <RepaymentSchedule />
            </div>
        </div>
        );
    }
}

export default Calculator;