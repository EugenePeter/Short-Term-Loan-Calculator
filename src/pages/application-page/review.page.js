import React, { useContext, useEffect } from "react";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { useImmer } from "use-immer";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { amount } from "../../components/redux/calculator/loan-amount/loan-amount.selectors";
import { durationOfLoan, schedule, repayment, total } from "../../components/redux/calculator/repayment-amount/repayment-amount.selector";

import { Container, ContainerNarrower, TitleContainer } from "../../global-styles/global.styles";

import { GlobalButton, BackBtn } from "../../global-styles/GlobalButton.styles";

import { FormContainer, ButtonWrapper } from "../../components/Form/form-input/form-input.styles";

import { TabsContainer } from "../../components/Form/tabs-component/Tabs.styles";

import { Tabs, TabsDetails } from "../../components/Form/tabs-component/Tabs.styles";

// import "normalize.css";

function Review(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const { amount, durationOfLoan, schedule, repayment, total } = props;

  const disclosureState = appState.disclosure;

  const [state, setState] = useImmer({
    disabled: true,
    isNotClicked: false,
  });

  useEffect(() => {
    if (disclosureState.disclosureStatement && appState.disclosure.cancellationStatement && appState.disclosure.privacyWaiver && appState.disclosure.creditCheck) {
      setState((draft) => {
        draft.disabled = false;
      });
    }
  }, [disclosureState]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    appDispatch({ type: "nxtStep" });
  };

  const handleBack = (e) => {
    e.preventDefault();
    appDispatch({ type: "back" });
  };

  return (
    <Container>
      <ContainerNarrower>
        <FormContainer onSubmit={handleSubmit}>
          <ButtonWrapper>
            <BackBtn onClick={handleBack} /> Back
          </ButtonWrapper>
          <TitleContainer>
            <h2>Review</h2> {""}
            <small>Please check if the details are all correct. </small>
          </TitleContainer>

          <TabsContainer>
            <Tabs className="">
              <TabsDetails>
                <h3>{amount}</h3>
                <small>Loan Amount</small>
              </TabsDetails>
            </Tabs>

            <Tabs className="">
              <TabsDetails>
                <h3>
                  {durationOfLoan} {schedule}
                  {durationOfLoan > 1 && "s"}
                </h3>
                <small>Repayment Schedule</small>
              </TabsDetails>
            </Tabs>
            <Tabs className="">
              <TabsDetails>
                <h3>{repayment}</h3>
                <small>
                  {schedule}ly repayment{durationOfLoan > 1 && "s"}{" "}
                </small>
              </TabsDetails>
            </Tabs>

            <Tabs className="">
              <TabsDetails>
                <h3>{total}</h3>
                <small>Total payment</small>
              </TabsDetails>
            </Tabs>
          </TabsContainer>
          <ButtonWrapper>
            <GlobalButton filterApplicants>Save And Continue</GlobalButton>
          </ButtonWrapper>
        </FormContainer>
      </ContainerNarrower>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  amount,
  durationOfLoan,
  schedule,
  repayment,
  total,
});
export default connect(mapStateToProps)(withRouter(Review));
