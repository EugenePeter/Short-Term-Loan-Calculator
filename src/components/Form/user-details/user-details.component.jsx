import React, { Component } from 'react';

import { Container } from '../../../global-styles/global.styles'
import CustomButton from '../../custom-button/custom-button.component';

class UserDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Container >
                <h1 className="ui centered">Enter User Details</h1>
                    <label>First Name</label>
                    <input
                    placeholder='First Name'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                    <label>Last Name</label>
                    <input
                    placeholder='Last Name'
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                    <label>Email Address</label>
                    <input
                    type='email'
                    placeholder='Email Address'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                <CustomButton onClick={this.saveAndContinue}>Save And Continue </CustomButton>
            </Container>
        )
    }
}

export default UserDetails;