import React, { Component } from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';

import { Container } from '../../global-styles/global.styles';

class PersonalDetails extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
            <Container>
                <h1 className="ui centered">Enter Personal Details</h1>
                <label>Age</label>
                <input placeholder='Age'
                onChange={this.props.handleChange('age')}
                defaultValue={values.age}
                />
                <label>City</label>
                <input placeholder='City'
                onChange={this.props.handleChange('city')}
                defaultValue={values.city}
                />
                <label>Country</label>
                <input placeholder='Country'
                onChange={this.props.handleChange('country')}
                defaultValue={values.country}
                />
                <CustomButton onClick={this.back}>Back</CustomButton>
                <CustomButton onClick={this.saveAndContinue}>Save And Continue </CustomButton>
            </Container>
        )
    }
}

export default PersonalDetails;