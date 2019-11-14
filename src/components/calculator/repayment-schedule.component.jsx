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
            maxTerm: 8,
            repaymentSchedule: 'Month',  
            aprValue: '',
            schedule: [
                {
                    scheduleValue: 32,
                    aprValue: 48,
                    scheduleName: 'Week',
                    i: 1,
                    id: 1
                },
                {
                    scheduleValue: 16,
                    aprValue: 24,
                    scheduleName: 'Fornight',
                    i: 2,
                    id: 2
                },
                {
                    scheduleValue: 8,
                    aprValue: 12,
                    scheduleName: 'Month',
                    i: 3,
                    id: 3
                },
            ],

            loanAmount: 5000,
            loanDuration: 2,
            APR: 0.14141666666666666
        };

        // this.handleRepaymentSchedule = this.handleRepaymentSchedule.bind(this)
    }

    handleRepaymentSchedule = event => {
        // const {maxTerm } = this.state;
        // event.preventDefault();
        const { value } = event.target;
        const  schedName = event.target.dataset.max
        const aprValue = event.target.dataset.value

        this.setState({repaymentSchedule: value})

        this.setState({maxTerm: schedName})

        // this.setState({test: aprValue })


        console.log(schedName)


        const {APR} = this.state;
        const apr = APR / aprValue;
        const baseApr = 1.697;
        // const Sched = e.target.name;
        // const maximumTerm = e.target.term;

        
        if(this.state.APR !== 1.697) {
            this.setState({APR: baseApr / aprValue  })
            // this.setState({repaymentSchedule: Sched})
            // this.setState({maxTerm: maximumTerm})

        } else {
            this.setState({APR: apr})
            
        }

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

        const {loanAmount, loanDuration,  APR } = this.state;
        // const { maximumTerm, repaymentSchedule } = this.props;

        return(
            <div className="Calculator__inner">
                <div className="Repayment-schedule">
                    {   
                        schedule.map(({scheduleValue,  scheduleName, aprValue, i, id}) => (
                            <button 
                              
                                className={`Repayment-schedule__${scheduleName}`}
                                onClick={ this.handleRepaymentSchedule} 
                                key={id}
                                value={scheduleName}
                                data-max={scheduleValue}
                                data-value={aprValue} tabIndex={i}>
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
                            <MonthlyRepayment amount={loanAmount} years={ loanDuration } aprValue={ APR }/>
                        </div>
                    </div>
                </div>
            </div>
            
           
        );
    }

}

export default RepaymentSchedule;



