import React, { Component, Fragment} from 'react';

import 'normalize.css';

import {  Small }  from '../../global-styles/global.styles';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FormInput from '../../components/Form/form-input/form-input.component';

import UserDetails from '../../components/Form/user-details/user-details.component';

import PersonalDetails from './personal-details.component';




class MainApplication extends Component {
    constructor() {
        super();

        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            city: '',
            country: ''
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

    render() {

        const {step} = this.state;
        const { firstName, lastName, email, age, city, country } = this.state;
        const values = { firstName, lastName, email, age, city, country };

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
        }
      }
}

export default MainApplication;