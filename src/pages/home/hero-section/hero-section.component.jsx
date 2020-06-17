import React, { Fragment } from "react";
import "normalize.css";

import { ContainerRow } from "../../../global-styles/global.styles";
import { HeroSectionWrapper, Modifiers } from "./hero-section.styles";

export const HeroSection = () => {
  return (
    <Fragment>
      <Modifiers />
      <ContainerRow>
        <HeroSectionWrapper className="margin-t margin-b">
          <h1>INSTANT LOAN APPROVAL</h1>
          <h3 align="center">For qualified applicants</h3>
        </HeroSectionWrapper>
      </ContainerRow>
    </Fragment>
  );
};

export const GetCash = () => {
  return (
    <Fragment>
      <Modifiers />
      <ContainerRow>
        <HeroSectionWrapper className="margin-b">
          <h3>Get Cash in 0 minute</h3>
          <h3 align="center">Upon loan approval</h3>
          <small align="center">Terms, Conditions and Lending Criteria Apply</small>
        </HeroSectionWrapper>
      </ContainerRow>
    </Fragment>
  );
};

// export default HeroSection;
