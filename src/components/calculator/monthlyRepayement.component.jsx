import React, {Component} from "react";
import DisplayMonthlyRepayment   from './displayMonthlyRepayment.component';

class MonthlyRepayment extends Component {
    constructor() {
        super();

        this.state = {
           APR: 0.06
        };
    }



    // handleAmountChange = value => {
    //     this.setState({ loanAmount: value});
    // };

    // handleDurationChange = value => {
    //     this.setState({ loanDuration: value});
    // };


    calculateMonthlyPayment = () => {
        const { amount , years } = this.props;
        const apr = this.state.APR / 12;
        const loanDuration = years / 12; 

        const a = Math.pow(1 + apr, loanDuration ) - 1;
        const b = Math.pow(1 + apr, loanDuration ) * apr;
        const discountFactor = a / b;
        const monthlyPayment = amount / discountFactor;

        // return <p>${Math.round(monthlyPayment)}</p>;
        return <p>{monthlyPayment}</p>

    };


    render() {
        return(
            <div className="flex">
                <DisplayMonthlyRepayment func={this.calculateMonthlyPayment()} text="Monthly Payment" />
     
        </div>
        );
    }
}

export default MonthlyRepayment;