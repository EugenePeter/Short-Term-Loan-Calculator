import React, { Component, Fragment} from 'react';

import 'normalize.css';
import Calculator from '../../components/calculator/calculator.component';

import { Container, Small }  from '../../global-styles/global.styles';

import {  UpdateLoanContainer, 
    UpdateLoan, 
    InputWrapper, 
    InputWrapperInner, 
    RepaymentScheduleContainer } from './application-page.styles'


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'


import RepaymentAmountFigure from '../../components/calculator/repayment-figure.component';

import TotalRepayment from '../../components/calculator/total-repayment.component';

import RepaymentSchedule from '../../components/calculator/repayment-schedule.component';

import LoanAmount from '../../components/calculator/loan-amount.component';

import LoanDuration from '../../components/calculator/loan-duration.component';

import CustomButton from '../../components/custom-button/custom-button.component';


class ApplicationPage extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
    }



    render() {
        return(
            <Container>
                <h2> Hi you are borrowing</h2>
                <RepaymentAmountFigure />
                <TotalRepayment />
                <Small className='margin-top'> You can update loan amount, repayment schedule and duration below</Small>
                <UpdateLoanContainer>
                    <UpdateLoan>
                        <RepaymentSchedule />
                        <InputWrapper>
                            <InputWrapperInner>
                                <LoanAmount />
                                <LoanDuration />
                            </InputWrapperInner>
                        </InputWrapper>
                    </UpdateLoan>
                    <CustomButton >CONTINUE</CustomButton>

                </UpdateLoanContainer>
            </Container>
        );
    }
}

const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps)(ApplicationPage);