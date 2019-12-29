import React, { Component, Fragment} from 'react';

import 'normalize.css';

import Calculator from '../../components/calculator/calculator.component';


import { HeaderContainer } from './home.styles';
import HeroSection from './hero-section/hero-section.component';


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
                <HeroSection />
                <Calculator />
                {/* <h1>section</h1> */}
            </HeaderContainer>
        );
    }
}

export default Home;