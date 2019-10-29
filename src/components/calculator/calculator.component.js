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
            repaymentSchedule: '',
            APR: 0.06
        };
    }

    handleAmountChange = value => {
        this.setState({ loanAmount: value});
        console.log(this.state.loanAmount)
    };

    handleDurationChange = value => {
        this.setState({ loanDuration: value});
    };

    handleRepaymentSchedule = event => {
        // event.preventDefault();
        const { value } = event.target;
        this.setState({repaymentSchedule: value });
        console.log(value);
        console.log(this.state);
    }

    test = event => {
        if(this.state.APR === 0.06) {
            this.setState({APR:0.06 / 48})
        } else {
            this.setState({APR:0.06 / 48})
        }
    }

    test2 = event => {
        if(this.state.APR !== 0.06) {
          this.setState({APR: 0.0025})
        } else {
            this.setState({APR: 0.0025})
        }
    }

    test3 = event => {
        if(this.state.APR !== 0.06) {
          this.setState({APR: 0.05})
        } else {
            this.setState({APR: 0.06})
        }
    }


    







    render() {
        const {loanAmount, loanDuration, APR  } = this.state;
        // const weeklyAPR = this.state.APR / 48;
        // const fornightAPR = this.state.APR / 24;
        return(
                <div className="Calculator">
                    <div className="Calculator__inner">
                        <div className="Repayment-schedule">
                            <div 
                                className="Repayment-schedule__weekly"
                                onClick={this.test} >
                                Weekly
                            </div>
                            <div 
                                className="Repayment-schedule__fortnightly"  
                                onClick={this.test2} >
                                Fornightly
                            </div>
                            <div 
                                className="Repayment-schedule__monthly"
                                onClick={this.test3}>Monthly</div>  
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
                                <h2>{loanDuration} month{loanDuration > 1 && "s"}</h2>
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