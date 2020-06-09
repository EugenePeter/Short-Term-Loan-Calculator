import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import {
  Container,
  ContainerNarrower,
} from "../../global-styles/global.styles";

import LoanFigures from "./loan-figures.component";

import { GlobalStyle } from "./loan-figures.styles";
function LoanIndicator(props) {
  const indicatorBase = {
    fill: "none",
    stroke: "#7F8080",
    strokeWidth: 42,
    strokeMiterlimit: 10,
  };

  const indicator = {
    opacity: 0.8,
    fill: "none",
    stroke: "#51B848",
    strokeWidth: 79,
    strokeMiterlimit: 10,
  };

  const StyledIndicatorBase = styled.svg`
    fill: none;
    stroke: #ccd7d8;
    stroke-width: 42;
    stroke-miterlimit: 10;

    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  `;

  const getPayment = {
    first: 1062.6514892578125 * 0.25,
    second: 1062.6514892578125 * 0.5,
    third: 1062.6514892578125 * 0.75,
    fourth: 1062.6514892578125 * 1,
  };

  // console.log(getPayment.fourth);
  const StyledIndicator = styled.svg`
    opacity: 0.8;
    fill: none;
    stroke: #69d519;
    stroke-width: 79;
    stroke-miterlimit: 10;

    stroke-dasharray: 1062.6514892578125;
    animation: circle-outline 2.5s cubic-bezier(0.5, 0, 0.07, 1.01) infinite;

    @keyframes circle-outline {
      from {
        stroke-dashoffset: 0;
      }
      to {
        stroke-dashoffset: ${getPayment.third};
      }
    }
  `;

  return (
    <Fragment>
      <GlobalStyle />
      <Container className="white-background">
        <ContainerNarrower className="narrower">
          <svg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 417 417"
            style={{ enableBackground: "new 0 0 417 417" }}
          >
            <style type="text/css" />
            <StyledIndicatorBase>
              <circle
                id="base"
                className={indicatorBase}
                cx="208.5"
                cy="208.5"
                r="168"
              />
            </StyledIndicatorBase>

            <StyledIndicator>
              <path
                id="indicator"
                className={indicator}
                d="M208.5,39.4c93.4,0,169.1,75.7,169.1,169.1s-75.7,169.1-169.1,169.1S39.4,301.9,39.4,208.5
S115.1,39.4,208.5,39.4"
              />
            </StyledIndicator>
          </svg>
          <LoanFigures />
        </ContainerNarrower>
      </Container>
    </Fragment>
  );
}
export default withRouter(LoanIndicator);
