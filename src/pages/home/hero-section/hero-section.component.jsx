import React from "react";
import "normalize.css";

import { ContainerRow } from "../../../global-styles/global.styles";
import { HeroSectionWrapper } from "./hero-section.styles";

const HeroSection = () => {
  return (
    <ContainerRow>
      <HeroSectionWrapper>
        <h1>INSTANT LOAN APPROVAL</h1>
        <h3 align="center">For qualified applicants</h3>
        <h1>Get Cash</h1>
        <h1>in 0 minute</h1>
        <h3 align="center">Upon loan approval</h3>
        {/* <h5>No stress | No Fuss | No Tricky Fine Print</h5> */}
        <small align="center">
          Terms, Conditions and Lending Criteria Apply
        </small>
      </HeroSectionWrapper>
    </ContainerRow>
  );
};

export default HeroSection;
