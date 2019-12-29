import React, { Component, Fragment} from 'react';

import 'normalize.css';

import {  Small }  from '../../global-styles/global.styles';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FormInput from '../../components/Form/form-input/form-input.component';

import UserDetails from './user-details.component';

import PersonalDetails from './personal-details.component';

import { Form, Field } from 'react-final-form';

import { FormContainer, ButtonsBarContainer } from '../../components/Form/form-input/form-input.styles';

import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, addUserApplication } from '../../components/firebase/firebase.utils';

import  LoanData from './data';





class MainApplication extends Component {
    constructor() {
        super();

        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            mobileNumber: '',
            dateOfBirth: 'date',
            age: '',
            city: '',
            country: '',

        }
    }
    
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleContinue = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    submitForm = () =>{
        auth.onAuthStateChanged(async userAuth => {
            // const signedInUser = userAuth.uid;
            // alert(signedInUser)
            // console.log(signedInUser)
           addUserApplication(userAuth)
           const formApplication = this.state
           
        }); 
    }

    render() {

        const {step} = this.state;
        const { firstName, lastName, mobileNumber, dateOfBirth, email, age, city, country } = this.state;
        const values = { firstName, lastName, mobileNumber, dateOfBirth, email, age, city, country };

        console.log(values)



        switch(step) {
            
            case 1: 
                return <UserDetails
                            nextStep={this.nextStep} 
                            handleChange = {this.handleChange}
                            values={values}
                        />
             case 2:
                return <PersonalDetails 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange = {this.handleChange}
                        values={values}
                        />  
            case 3:
                return (

                    <LoanData  loanData test />
                );
            default:
        }
    }
}

export default MainApplication;