import React, { Component, Fragment} from 'react';

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import './calculator.component.scss';


import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';


import { updateAmountInput } from '../redux/calculator/loan-amount/loan-amount-action';

import 'normalize.css';

class LoanAmount extends Component {

    constructor() {
        super();

        this.state = {
     
            APR: 0.14141666666666666,
        };
    }

    handleAmountChange = value => {
        const { updateAmountInput } = this.props;
        updateAmountInput(value)
        console.log("amount input is " + updateAmountInput)
        
    }


    render() {
      
        const { loanAmount: { input: { amount }}} = this.props;

        return(
            
           <Fragment>
                <small>redux I want to borrow</small>   
                <h2>${amount}</h2>                  
                <InputRange
                    step={100}
                    maxValue={5000}    
                    minValue={100}
                    value={amount}
                    onChange={this.handleAmountChange}
                />
           </Fragment>
        );
    }
}



const mapStateToProps = ({ loanAmount }) => {
    return {
        loanAmount
    }
}

const mapDispatchToProps = dispatch =>  bindActionCreators({
    updateAmountInput
}, dispatch);
    

export default connect(
    mapStateToProps,
    mapDispatchToProps)(LoanAmount);



