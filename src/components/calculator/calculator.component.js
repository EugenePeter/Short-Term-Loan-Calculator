import React, { Component} from 'react';

// import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import './calculator.component.scss';

import LoanAmount from './loan-amount.component';


import 'normalize.css';




class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            // loanDuration: 1,
            repaymentSchedule: '',

            schedule: [
                {
                    scheduleValue: 'weekly',
                    scheduleName: 'Weekly'
                },
                {
                    scheduleValue: 'fornightly',
                    scheduleName: 'Fornightly'
                },
                {
                    scheduleValue: 'monthly',
                    scheduleName: 'Monthly'
                }
            ]
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
        const { repaymentSchedule ,schedule}  = this.state;
        return(
        <div className="Calculator">
            <div className="Calculator__inner">
                <div className="Repayment-schedule">
                    { 
                        schedule.map(({scheduleValue,  scheduleName}) => (
                            <button 
                                className="Repayment-schedule__weekly" 
                                onClick={ this.handleRepaymentSchedule} 
                                value={scheduleValue}>
                                { scheduleName }
                                    
                            </button> 
                        )) 
                    }

                </div>

                <div className="Input-wrapper">
                    <LoanAmount sched={repaymentSchedule}/>
                </div>
            </div>
        </div>
        );
    }
}

export default Calculator;