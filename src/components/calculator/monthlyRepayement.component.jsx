import React, {Component} from "react";
import DisplayMonthlyRepayment   from './displayMonthlyRepayment.component';

import './calculator.component.scss';
import 'normalize.css';





class MonthlyRepayment extends Component {
    constructor() {
        super();

        this.state = {
        //    APR: 1.679
        };
    }



    // handleAmountChange = value => {
    //     this.setState({ loanAmount: value});
    // };

    // handleDurationChange = value => {
    //     this.setState({ loanDuration: value});
    // };


    calculateMonthlyPayment = () => {
        const { amount , years, apr } = this.props;
        // const apr = this.state.APR / 12;
        // const loanDuration = years * 12; 
        // const loanDuration = years; 
        console.log(apr)

        const a = Math.pow(1 + apr, years ) - 1;
        const b = Math.pow(1 + apr, years ) * apr;
        const discountFactor = a / b;
        const monthlyPayment = amount / discountFactor;

        console.log(a)
        console.log(b)
        console.log(discountFactor)
        console.log(monthlyPayment)

        // return <p>${Math.round(monthlyPayment)}</p>;
        // return <p>{monthlyPayment}</p>

        // return <h1> {loanDuration} </h1>
        return Math.round(monthlyPayment).toLocaleString('en')
        // return Math.round(monthlyPayment).toFixed(2).toLocaleString('en')
        // return monthlyPayment.toLocaleString('en')

    };


    render() {
        return(
                <DisplayMonthlyRepayment calculateMonthlyPayment={this.calculateMonthlyPayment()} text="Monthly Payment" />
        );
    }
}

export default MonthlyRepayment;