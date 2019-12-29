import React, { Component } from 'react';

import { Container } from '../../global-styles/global.styles'
import CustomButton from '../../components/custom-button/custom-button.component';

import { FormContainer, ButtonsBarContainer, ButtonWrapper } from '../../components/Form/form-input/form-input.styles';

import  FormInput  from '../../components/Form/form-input/form-input.component';

class UserDetails extends Component{

      handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };

      saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
  


    render() {

        const { values } = this.props
        return(

            <FormContainer onSubmit={this.handleSubmit}>
                <FormInput
                    name='fname'
                    type='text'
                    handleChange={this.props.handleChange('firstName')}
                    value={values.firstName}
                    label='first name'
                    required
                />
                <FormInput
                    name='lname'
                    type='text'
                    handleChange={this.props.handleChange('lastName')}
                    value={values.lastName}
                    label='last name'
                    required
                />
         

                <ButtonWrapper>
                    <CustomButton onClick={this.saveAndContinue}>Save And Continue </CustomButton>
                </ButtonWrapper>
            </FormContainer>
        );
    }
}
export default UserDetails;