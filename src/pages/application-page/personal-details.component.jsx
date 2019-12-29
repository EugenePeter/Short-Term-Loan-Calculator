import React, { Component } from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';

import { Container } from '../../global-styles/global.styles';

import { auth, addUserApplication } from '../../components/firebase/firebase.utils';

import { Form, Field } from 'react-final-form';

import { FormContainer, ButtonsBarContainer, ButtonWrapper } from '../../components/Form/form-input/form-input.styles';

import  FormInput  from '../../components/Form/form-input/form-input.component';

class PersonalDetails extends Component{

    componentDidMount() {
        auth.onAuthStateChanged(async userAuth => {
            // const signedInUser = userAuth.uid;
            // alert(signedInUser)
            // console.log(signedInUser)
           addUserApplication(userAuth)

            
            }); 
    }

    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };

      saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <FormContainer onSubmit={this.handleSubmit}>
                <FormInput
                    name='mNumber'
                    type='number'
                    handleChange={this.props.handleChange('mobileNumber')}
                    value={values.mobileNumber}
                    label='mobile number'
                    required
                />
                <FormInput
                    name='date of birth'
                    type='date'
                    handleChange={this.props.handleChange('dateOfBirth')}
                    value={values.dateOfBirth}
                    label='date of birth'
                    placeholder='date of birth'
                    required
                />
         

                <ButtonWrapper>
                <CustomButton onClick={this.saveAndContinue}>Save And Continue </CustomButton>
                </ButtonWrapper>
            </FormContainer>

        )
    }
}

export default PersonalDetails;


{/* <Form onSubmit={this.nxt}>
{({ handleSubmit}) => 
    (
    <form onSubmit={ handleSubmit }>
        <Field name= 'name'>
            {(props) => (
                <FormContainer onSubmit={this.handleSubmit}>
                    <FormInput
                        // name='email'
                        type='email'
                        // handleChange={this.handleChange}
                        // value={this.state.email}
                        label='email'
                        required

                        name={props.input.email}
                        value={props.input.value}
                        onChange={props.input.onChange}

                    />
                        <CustomButton type='submit' onClick={this.saveAndContinue} > continue </CustomButton>
                </FormContainer>
            )}
        </Field>
    </form>
    )
}
</Form> /> */}
