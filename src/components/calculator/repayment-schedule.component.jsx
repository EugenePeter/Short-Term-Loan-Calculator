import React, { Component} from 'react';

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import './calculator.component.scss';

// import LoanAmount from './loan-amount.component';

import MonthlyRepayment from './monthlyRepayement.component'

// import LoanDuration from './loan-duration.component';


// import LoanDuration from './loan-duration.component';

// import MonthlyRepayment from './monthlyRepayement.component'

import 'normalize.css';

class RepaymentSchedule extends Component {
    constructor() {
        super();

        this.state = {
            maxTerm: '8',
            repaymentSchedule: 'Month',  
            schedule: [
                {
                    scheduleValue: '32',
                    scheduleName: 'Week'
                },
                {
                    scheduleValue: '16',
                    scheduleName: 'Fornight'
                },
                {
                    scheduleValue: '8',
                    scheduleName: 'Month'
                },
            ],

            loanAmount: 5000,
            loanDuration: 2,
        };

        // this.handleRepaymentSchedule = this.handleRepaymentSchedule.bind(this)
    }

    handleRepaymentSchedule = event => {
        // const {repaymentSchedule } = this.state.repaymentSchedule;
        event.preventDefault();
        const { value } = event.target;
        const  schedName = event.target.dataset.test
        this.setState({repaymentSchedule: value})

        this.setState({maxTerm: schedName})

        // alert(event.target)

        console.log(schedName)
        

    }


    handleAmountChange = value => {
        this.setState({ loanAmount: value});
        console.log(this.state.loanAmount)
    };

    handleDurationChange = value => {
        this.setState({ loanDuration: value});
    };


  

    render() {
        const { maxTerm, schedule, repaymentSchedule } = this.state;

        const {loanAmount, loanDuration } = this.state;
        // const { maximumTerm, repaymentSchedule } = this.props;

        return(
            <div className="Calculator__inner">
                <div className="Repayment-schedule">
                    {   
                        schedule.map(({scheduleValue,  scheduleName}) => (
                            <button 
                                className="Repayment-schedule__weekly" 
                                onClick={ this.handleRepaymentSchedule} 
                                value={scheduleName}
                                data-test={scheduleValue}>
                                { scheduleName }
                                    
                            </button> 
                        )) 
                       
                    }
                </div>
                <div className="Input-wrapper"> 
            

                    
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
                                maxValue={maxTerm}
                                minValue={1}
                                value={loanDuration}
                                onChange={this.handleDurationChange}
                            />
    
                            <div className="Input-wrapper__inner">
                                <MonthlyRepayment amount={loanAmount} years={ loanDuration }/>
                            </div>
                        </div>
                </div>
            </div>
            
           
        );
    }

}

export default RepaymentSchedule;



