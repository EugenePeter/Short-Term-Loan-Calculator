import React from "react";
import "normalize.css";
// import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

// import { createStructuredSelector } from "reselect";

import { WarningContainer, WarningInner } from "./application-page.styles";

import CustomButton from "../../components/custom-button/custom-button.component";

import {
  Container,
  ContainerNarrower,
} from "../../global-styles/global.styles";

import {
  FormContainer,
  ButtonsBarContainer,
  ButtonWrapper,
  FormBlock,
  RadioInput,
  FormSelect,
  FormTwoColumns,
  Span,
} from "../../components/Form/form-input/form-input.styles";

import { GlobalButton, BackBtn } from "../../global-styles/GlobalButton.styles";

const Warning = ({ history, props }) => {
  return (
    <WarningContainer>
      <Container>
        <ContainerNarrower>
          <WarningInner>
            <h2>Do you really need a loan today?</h2>
            <h4>Borrowing can be expensive</h4>
            <div>
              It can be expensive to borrow small amounts of money and borrowing
              may not solve your money problems.
            </div>
            <div>Check your options before you borrow:</div>
            <div>
              For information about other options for managing bills and debts,
              ring 1800 007 007 from anywhere in Australia
            </div>
            <div>
              Talk to your electricity, gas, phone or water provider to see if
              you can work out a payment plan
            </div>

            <div>
              If you are on government benefits, ask if you can receive an
              advance from Centrelink: www.humanservices.gov.au/ advancepayments
            </div>

            <small>
              *This statement is an Australian Government requirement under the
              National Consumer Credit Protection Act 2009.
            </small>

            <ButtonWrapper>
              <GlobalButton
                warning
                onClick={(event) => {
                  event.preventDefault();
                  history.push("./main-application");
                }}
                warning
              >
                Save And Continue
              </GlobalButton>
            </ButtonWrapper>
          </WarningInner>
        </ContainerNarrower>
      </Container>
    </WarningContainer>
  );
};

export default withRouter(Warning);
