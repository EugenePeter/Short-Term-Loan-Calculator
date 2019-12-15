import React, { Component, Fragment} from 'react';

import 'normalize.css';

import Calculator from '../../components/calculator/calculator.component';


import { HeaderContainer } from './home.styles';


class Home extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
    }



    render() {
        return(
            <HeaderContainer>
                <h1>home</h1>
                <Calculator />
                <h1>section</h1>
            </HeaderContainer>
        );
    }
}

export default Home;