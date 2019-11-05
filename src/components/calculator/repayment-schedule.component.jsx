import React, { Component} from 'react';

import "react-input-range/lib/css/index.css";
import './calculator.component.scss';

import LoanAmount from './loan-amount.component';

// import LoanDuration from './loan-duration.component';


// import LoanDuration from './loan-duration.component';

// import MonthlyRepayment from './monthlyRepayement.component'

import 'normalize.css';

class RepaymentSchedule extends Component {
    constructor() {
        super();

        this.state = {
            maxTerm: '32',
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

        this.handleRepaymentSchedule = this.handleRepaymentSchedule.bind(this)
    }

    handleRepaymentSchedule = event => {
        event.preventDefault();
        const { value } = event.target;
        this.setState({repaymentSchedule: value})
    }

  

    render() {
        const { maxTerm, schedule } = this.state;
        return(
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
                    <LoanAmount maximumTerm={maxTerm} />
                </div>
            </div>
            
           
        );
    }

}

export default RepaymentSchedule;



