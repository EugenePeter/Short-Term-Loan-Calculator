import React, { Component} from 'react';

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import './calculator.component.scss';

import {testAction} from '../redux/calculator/repayment-schedule/repayment-schedule.actions'

// import LoanAmount from './loan-amount.component';

import MonthlyRepayment from './monthlyRepayement.component'

import { connect } from 'react-redux';

// import LoanDuration from './loan-duration.component';


// import LoanDuration from './loan-duration.component';

// import MonthlyRepayment from './monthlyRepayement.component'

import 'normalize.css';

class RepaymentSchedule extends Component {
    constructor() {
        super();

        this.state = {
            // maxTerm: 8,
            repaymentSchedule: 'Month',  
            aprValue: '',
            loanAmount: 5000,
            loanDuration: 2,
            APR: 0.14141666666666666,
        };

        // this.handleRepaymentSchedule = this.handleRepaymentSchedule.bind(this)
    }

    handleRepaymentSchedule = event => {
        const {maxTerm } = this.state;
        // event.preventDefault();
        const { value } = event.target;
        const  schedName = event.target.dataset.max
        const aprValue = event.target.dataset.value

        this.setState({repaymentSchedule: value})

        this.setState({maxTerm: schedName})

        // this.setState({test: aprValue })

        console.log(schedName)


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
        const { schedule, repaymentSchedule } = this.state;

        const {loanAmount, loanDuration,  APR } = this.state;
   

        // const {a:{child, name}, week:{scheduleName}}= this.props

        const { week, fornight, month, maxTerm, maximumTerm} = this.props
          
        const weekly = week.scheduleName
        const fornightly = fornight.scheduleName
        const monthly = month.scheduleName

        console.log(this.props)
   
        
        const { scheduleValue, aprValue, i, id } = this.props;




        return(
            
            <div className="Calculator__inner">
                <div className="Repayment-schedule">
                
                    <button  
                        className={`Repayment-schedule__${weekly}`}
                        onClick={ this.handleRepaymentSchedule} 
                        key={id}
                        value={weekly}
                        data-max={32}
                        data-value={aprValue} tabIndex={i}>
                        {  weekly }
                                
                    </button> 
                    <button  
                        className={`Repayment-schedule__${fornightly}`}
                        onClick={ this.handleRepaymentSchedule} 
                        key={id}
                        value={fornightly}
                        data-max={16}
                        data-value={aprValue} tabIndex={i}>
                        { fornightly }
                                
                    </button> 
                    <button  
                        className={`Repayment-schedule__${monthly}`}
                        onClick={ this.doSomeThing} 
                        key={id}
                        value={monthly}
                        data-max={8}
                        data-value={aprValue} tabIndex={i}>
                        { monthly }
                                
                    </button> 

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



const mapStateToProps = ({test:{a, testz, week, fornight, month}}) => {
    return {
       a,
       week,
       fornight,
       month
    
    }
}
const mapDispatchToProps = dispatch => ({
    doSomeThing: () => dispatch(testAction())
    });
    

export default connect(
    mapStateToProps,
    mapDispatchToProps)(RepaymentSchedule);



