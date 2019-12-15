import React, { Component} from 'react';

// import './calculator.component.scss';

import { 
        FormInputContainer, 
        FormInputWrapper, 
        FormInputInner 
    } from '../custom-button/custom-button.styles';

import SignInAndSignUp from '../sign-in-sign-up-form/signInAndSignUp.component'

import styled, { css } from 'styled-components'


import 'normalize.css';




class GetStarted extends Component {
    constructor() {
        super();

        this.state = {

        };
    }


    render() {
        const { children, ...props} = this.props
        return(
            <FormInputContainer { ...props }>
                <FormInputWrapper> 
                    <FormInputInner>
                        <SignInAndSignUp></SignInAndSignUp>
                    </FormInputInner>
                </FormInputWrapper>
            </FormInputContainer>
        );
    }
}

export default GetStarted;