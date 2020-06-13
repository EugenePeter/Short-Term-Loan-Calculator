import React, { Component, Fragment } from "react";

import "normalize.css";

import Calculator from "../../components/calculator/calculator.component";

import { HeaderContainer } from "./home.styles";
import HeroSection from "./hero-section/hero-section.component";
import Navigation from "../../components/navigation/navigation.component";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <Fragment>
        <HeaderContainer>
          <HeroSection />
          <Calculator />
        </HeaderContainer>
      </Fragment>
    );
  }
}

export default Home;
