import React, { Component} from 'react';

import './calculator.component.scss';

import LoanAmount from './loan-amount.component';
import LoanDuration from './loan-duration.component';
import RepaymentAmount from './repayment-amount.component'

import  RepaymentSchedule from './repayment-schedule.component';

import CustomButton from '../custom-button/custom-button.component';
import GetStarted from './get-started.component';


import 'normalize.css';




class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            getStarted: false
        };
    }

    handleGetStarted = event => {
        const{ getStarted } = this.state;
        event.preventDefault();
        this.setState({getStarted:!getStarted})
        alert()
    }



    
    render() {
        const{ getStarted} = this.state;
        return(
        <div className="Calculator">
            <div className="Calculator__inner">
                <RepaymentSchedule />
                <div className="Input-wrapper"> 
                    <div className="Input-wrapper__inner">
                        <LoanAmount />
                        <LoanDuration />
                    </div>
                    <div className="Input-wrapper__inner">
                        <RepaymentAmount />
                    </div>
                    <div className="Input-wrapper__inner">
                        <CustomButton onClick={this.handleGetStarted} isActive={getStarted}>Get Started</CustomButton>
                    </div>
                </div>
            </div>
            <GetStarted isActive={getStarted} />
        </div>
        );
    }
}

export default Calculator;