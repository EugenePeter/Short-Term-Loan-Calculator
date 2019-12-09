import React, { Component} from 'react';

import './calculator.component.scss';

import { 
        FormInputContainer, 
        FormInputWrapper, 
        FormInputInner 
    } from '../custom-button/custom-button.styles';

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
                       <h1>test</h1>
                    </FormInputInner>
                </FormInputWrapper>
            </FormInputContainer>
        );
    }
}

export default GetStarted;