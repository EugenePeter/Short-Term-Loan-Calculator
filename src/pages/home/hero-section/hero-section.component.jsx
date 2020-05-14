
import React, { Fragment } from "react";
import 'normalize.css';

import {Container} from '../../../global-styles/global.styles';
import { HeroSectionWrapper } from './hero-section.styles';

const HeroSection = () => {

    return (

        <Container>
            <HeroSectionWrapper>
                <h1>Get Cash</h1>
                <h1>in 30 minutes</h1>
                <h3 align='center'>Fast Cash Loans up to $5000</h3>
                {/* <h5>No stress | No Fuss | No Tricky Fine Print</h5> */}
                <small>Terms, Conditions and Lending Criteria Apply</small>
            </HeroSectionWrapper>
        </Container>
    );
};


export default HeroSection;