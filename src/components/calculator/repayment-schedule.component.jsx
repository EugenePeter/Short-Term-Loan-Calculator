import React, { Component} from 'react';

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import './calculator.component.scss';

import {  month, fortnightAction, weekAction } from '../redux/calculator/repayment-schedule/repayment-schedule.actions'

// import LoanAmount from './loan-amount.component';

import MonthlyRepayment from './monthlyRepayement.component'

import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';

import { updateInput } from '../redux/calculator/loan-duration/loan-duration-actions';

import { updateAmountInput } from '../redux/calculator/loan-amount/loan-amount-action';

import LoanAmount from './loan-amount.component';

import 'normalize.css';
import RepaymentAmount from './repayment-amount.component';

class RepaymentSchedule extends Component {
    constructor() {
        super();

        this.state = {
            // maxTerm: 8,
            repaymentSchedule: 'Month',  
            aprValue: '',
            loanAmount: 2000,
            loanDuration: 6,
            APR: 0.14141666666666666,
        };
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
        const { updateInput } = this.props;
        updateInput(value)
    }



  

    render() {
        const { schedule, repaymentSchedule } = this.state;

        const {loanAmount, loanDuration,  APR } = this.state;
   

        // const {a:{child, name}, week:{scheduleName}}= this.props

        const { week, fornight, month, doSomeThing, test, sched, fornightSched, weekSched, monthSched  } = this.props

        const monthValue = test.maxTerm.term    

          
        const re = test.term

        const f = test.aprValuess

        console.log(f)

        const weekly = week.scheduleName
        const fornightly = fornight.scheduleName
        const monthly = month.scheduleName

        console.log(this.props)
        console.log(monthValue)
        console.log(sched)

        console.log(loanAmount)
   
        
        const { aprValue, i, id } = this.props;

        const { 
            loanDuration: { input: { txt = 8 }}} = this.props;

        console.log(txt)
     
  




        return(
            
            <div className="Calculator__inner">
                <div className="Repayment-schedule">
                
                    <button  
                        className={`Repayment-schedule__${weekly}`}
                        onClick={ weekSched } 
                        key={id}
                        value={weekly}
                        data-max={32}
                        data-value={aprValue} tabIndex={i}>
                        {  weekly }
                                
                    </button> 
                    <button  
                        className={`Repayment-schedule__${fornightly}`}
                        onClick={ fornightSched } 
                        key={id}
                        value={fornightly}
                        data-max={16}
                        data-value={aprValue} tabIndex={i}>
                        { fornightly }
                                
                    </button> 
                    <button  
                        autoFocus
                        className={`Repayment-schedule__${monthly}`}
                        onClick={ monthSched } 
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
                        <h2>{loanDuration} {sched}{loanDuration > 1 && "s"}</h2>
                        <InputRange
                            step={1}
                            maxValue={re}
                            minValue={1}
                            value={loanDuration}
                            onChange={this.handleDurationChange}
                        />
                        <h1>{monthValue}</h1>

                        <div className="Input-wrapper__inner">
                            <MonthlyRepayment amount={loanAmount} years={ loanDuration } aprValue={ APR }/>
                        </div>

                        <LoanAmount />
                
                        <small>Over </small>
                            <h2>{txt} {sched}{txt > 1 && "s"}</h2>
                        </div>
                        <InputRange
                            step={1}
                            maxValue={re}
                            minValue={1}
                            value={txt}
                            onChange={this.handleDurationChange}
                        />
                    <div className="Input-wrapper__inner">
                        <RepaymentAmount />
                    </div>
                        
                </div>
            </div>
            
           
        );
    }

}



const mapStateToProps = ({test:{week, fornight, month, b, sched}, test, loanDuration, loanAmount}) => {
    return {

       week,
       fornight,
       month,
       b,
       test,
       sched,
       loanDuration,
       loanAmount
    
    }
}
const mapDispatchToProps = dispatch =>  bindActionCreators({
    monthSched: () => dispatch(month()),
    fornightSched: () => dispatch(fortnightAction()),
    weekSched : () => dispatch(weekAction()),
    updateInput,
    updateAmountInput
    }, dispatch);
    

export default connect(
    mapStateToProps,
    mapDispatchToProps)(RepaymentSchedule);



