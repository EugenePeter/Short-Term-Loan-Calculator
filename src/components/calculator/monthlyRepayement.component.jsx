import React, {Component} from "react";
import DisplayMonthlyRepayment   from './displayMonthlyRepayment.component';

import './calculator.component.scss';
import 'normalize.css';





class MonthlyRepayment extends Component {
    constructor() {
        super();

        // this.state = {
        //   total: ''
        // };
    }





    // handleAmountChange = value => {
    //     this.setState({ loanAmount: value});
    // };

    // handleDurationChange = value => {
    //     this.setState({ loanDuration: value});
    // };


    calculateMonthlyPayment = () => {
        const { amount , years, aprValue } = this.props;
        const apr = aprValue;
        // const loanDuration = years * 12; 
        // const loanDuration = years; 


        const a = Math.pow(1 + apr, years ) - 1;
        const b = Math.pow(1 + apr, years ) * apr;
        const discountFactor = a / b;
        const monthlyPayment = amount / discountFactor;

        // return <p>${Math.round(monthlyPayment)}</p>;
        // return <p>{monthlyPayment}</p>
        // const totalPayment = monthlyPayment * years;

        // this.setState({total: totalPayment})
        return Math.round(monthlyPayment)
        // return Math.round(monthlyPayment).toFixed(2).toLocaleString('en')
        // return monthlyPayment.toLocaleString('en')
     

    };


    render() {
        const {years} = this. props
        return(
                <DisplayMonthlyRepayment calculateMonthlyPayment={this.calculateMonthlyPayment()} 
                text="Monthly Payment" 
                total={years}
                />
        );
    }
}

export default MonthlyRepayment;