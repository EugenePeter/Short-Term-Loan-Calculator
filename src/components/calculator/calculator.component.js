import React, { Component} from 'react';

import './calculator.component.scss';

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
            </div>
        </div>
        );
    }
}

export default Calculator;