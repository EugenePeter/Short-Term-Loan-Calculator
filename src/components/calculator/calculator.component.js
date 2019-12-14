import React, { Component} from 'react';

import './calculator.component.scss';

import LoanAmount from './loan-amount.component';
import LoanDuration from './loan-duration.component';
import RepaymentAmount from './repayment-amount.component'

import  RepaymentSchedule from './repayment-schedule.component';

import CustomButton from '../custom-button/custom-button.component.jsx'

import SignIn from '../sign-in/sign-in.component'


import 'normalize.css';



class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            getStartedBtn: 'false'
        };
    }

 

    handleGetStartedBtn = event => {
        // event.preventDefault();
       const getStartedBtn = this.state.getStartedBtn
        this.setState({getStartedBtn: !getStartedBtn });
        alert()
        console.log("eeeee" + this.state)
    }

    
    render() {
        const {getStartedBtn} = this.state
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
                    <div className="Input-wrapper__inner" 
                        onClick={ this.handleGetStartedBtn} >
                        <CustomButton 
                            onClick={ this.handleGetStartedBtn} 
                            clicked={getStartedBtn}
                        > Get Started {getStartedBtn} </CustomButton>
                    </div>
                </div>
            </div>

            <div className="form__inner">
                <div className="form-wrapper"> 
                    <SignIn />
                </div>
            </div>

        </div>
        );
    }
}

export default Calculator;