import React, { Component} from 'react';

import "react-input-range/lib/css/index.css";
import './calculator.component.scss';

import {  month, fortnightAction, weekAction } from '../redux/calculator/repayment-schedule/repayment-schedule.actions'

import { connect } from 'react-redux';


import 'normalize.css';

class RepaymentSchedule extends Component {

    handleDurationChange = value => {
        const { updateInput } = this.props;
        updateInput(value)
    }

    render() {
   
        const { week, fornight, month, repaymentSchedule, sched, fornightSched, weekSched, monthSched  } = this.props

        const monthValue = repaymentSchedule.maxTerm.term    

        const weekly = week.scheduleName
        const fornightly = fornight.scheduleName
        const monthly = month.scheduleName

        console.log(this.props)
        console.log(monthValue)
        console.log(sched)

        const { aprValue, i, id } = this.props;

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
            </div>
        );  
    }
}


const mapStateToProps = ({repaymentSchedule:{week, fornight, month, b, sched}, repaymentSchedule, loanDuration, loanAmount}) => {
    return {

       week,
       fornight,
       month,
       b,
       repaymentSchedule,
       sched,
       loanDuration,
       loanAmount
    
    }
}
const mapDispatchToProps = dispatch => ({
    monthSched: () => dispatch(month()),
    fornightSched: () => dispatch(fortnightAction()),
    weekSched : () => dispatch(weekAction()),
    });
    

export default connect(
    mapStateToProps,
    mapDispatchToProps)(RepaymentSchedule);



