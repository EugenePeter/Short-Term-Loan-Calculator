import React, { Component} from 'react';

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import './calculator.component.scss';

import MonthlyRepayment from './monthlyRepayement.component'

import 'normalize.css';



class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            loanAmount: 5000,
            loanDuration: 1,
            repaymentSchedule: 'Month',
            APR: 0.14,
            schedule: '',
            maxTerm: ''
        };

        // this.test = this.test.bind(this);
    }

    handleAmountChange = value => {
        this.setState({ loanAmount: value});
        console.log(this.state.loanAmount)
    };

    handleDurationChange = value => {
        this.setState({ loanDuration: value});
    };

    // handleRepaymentSchedule = event => {
    //     // event.preventDefault();
    //     const { value } = event.target;
    //     this.setState({repaymentSchedule: value });
    //     console.log(value);
    //     console.log(this.state);
    // }

    handleRepaymentAmount = e => {
        const value = e.target.value;
        const {APR} = this.state;
        const apr = APR / value;
        const baseApr = 1.697;
        const Sched = e.target.name;
        const maximumTerm = e.target.term;

        console.log(maximumTerm)


    //    this.setState({schedule: Sched})
        
        if(this.state.APR !== 1.697) {
            this.setState({APR: baseApr / value  })
            this.setState({repaymentSchedule: Sched})
            this.setState({maxTerm: maximumTerm})

        } else {
            this.setState({APR: apr})
            
        }

    }

    // test2 = event => {
    //     if(this.state.APR !== 0.06) {
    //       this.setState({APR: 0.0025})
    //     } else {
    //         this.setState({APR: 0.0025})
    //     }
    // }

    // test3 = event => {
    //     if(this.state.APR !== 0.06) {
    //       this.setState({APR: 0.05})
    //     } else {
    //         this.setState({APR: 0.06})
    //     }
    // }


    







    render() {
        const {loanAmount, loanDuration, APR, repaymentSchedule  } = this.state;
        // const {sched} = this.props;

        // const weeklyAPR = this.state.APR / 48;
        // const fornightAPR = this.state.APR / 24;
        return(
                <div className="Calculator">
                    <div className="Calculator__inner">
                        <div className="Repayment-schedule">
                            <button
                                className="Repayment-schedule__weekly"
                                onClick={this.handleRepaymentAmount} name="Week" value="48" term="14">
                               Weekly
                            </button>
                            <button 
                                className="Repayment-schedule__fortnightly"  
                                onClick={this.handleRepaymentAmount} name="Fornight" value="24" >
                                Fornightly
                            </button>
                            <button 
                                className="Repayment-schedule__monthly"
                                onClick={this.handleRepaymentAmount} name="Month" value="12">
                                MOnthly
                            </button>  
                        </div>
                        <div className="Input-wrapper">
                            <div className="Input-wrapper__inner">
                                <small>I want to borrow</small>
                                <h2>${loanAmount.toLocaleString('en')}</h2>                  
                                <InputRange
                                    step={100}
                                    maxValue={5000}    
                                    minValue={1000}
                                    value={loanAmount}
                                    onChange={this.handleAmountChange}
                                />
                            </div>
                            <div  className="Input-wrapper__inner">
                                <small>Over </small>
                                <h2>{loanDuration} {repaymentSchedule}{loanDuration> 1 && 's'}</h2>
                                <InputRange
                                    step={1}
                                    maxValue={7}
                                    minValue={1}
                                    value={loanDuration}
                                    onChange={this.handleDurationChange}
                                />
                            </div>
                            <div className="Input-wrapper__inner">
                                <MonthlyRepayment years={ loanDuration } amount={loanAmount} apr={APR} />
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Calculator;