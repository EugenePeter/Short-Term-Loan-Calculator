import React, { Fragment, useContext } from "react";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { Container, ContainerNarrower } from "../../global-styles/global.styles";

import { LoanIndicatorContainer, LoanIndicatorWrapper, LoanIndicatorProgressBar, Modifier } from "./loan-indicator.styles";

function LoanIndicator() {
  const appState = useContext(StateContext);
  // const appDispatch = useContext(DispatchContext);

  const currentStep = appState.step;

  return (
    <Fragment>
      <Modifier />
      <Container>
        <LoanIndicatorContainer>
          <ContainerNarrower>
            <LoanIndicatorWrapper step={currentStep}>
              <LoanIndicatorProgressBar />
            </LoanIndicatorWrapper>
          </ContainerNarrower>
        </LoanIndicatorContainer>
      </Container>
    </Fragment>
  );
}
export default LoanIndicator;
