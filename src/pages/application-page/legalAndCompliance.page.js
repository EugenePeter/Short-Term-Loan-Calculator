import React, { useContext, useEffect } from "react";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { useImmer } from "use-immer";

import { Container, ContainerNarrower, TitleContainer } from "../../global-styles/global.styles";

import { GlobalButton, BackBtn } from "../../global-styles/GlobalButton.styles";

import { FormContainer, ButtonWrapper } from "../../components/Form/form-input/form-input.styles";

import { CheckBoxContainer } from "../../components/Form/tabs-component/checkbox.styles";

import { CheckBox, CheckBoxBlock, CheckBoxBlock__wrapper, CheckBoxInput, CheckMark, CheckBoxDetails } from "../../components/Form/tabs-component/checkbox.styles";

// import "normalize.css";

function LegalAndCompliance() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const disclosureState = appState.disclosure;

  const [state, setState] = useImmer({
    disabled: true,
    isNotClicked: false,
  });

  console.log(" is not clicked is " + state.isNotClicked);

  useEffect(() => {
    if (disclosureState.disclosureStatement && appState.disclosure.cancellationStatement && appState.disclosure.privacyWaiver && appState.disclosure.creditCheck) {
      setState((draft) => {
        draft.disabled = false;
      });
    }
  }, [disclosureState]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!disclosureState.disclosureStatement && !appState.disclosure.cancellationStatement && !appState.disclosure.privacyWaiver && !appState.disclosure.creditCheck) {
      setState((draft) => {
        draft.isNotClicked = true;
      });
      console.log("is not clicked " + state.isNotClicked);
    } else {
      appDispatch({ type: "submit" });
    }
  };

  useEffect(() => {
    if (state.isNotClicked) {
      window.scrollTo(0, 0);
    }
  }, [state.isNotClicked]);

  useEffect(() => {
    if (!state.disabled) {
      setState((draft) => {
        draft.isNotClicked = false;
      });
    }
  }, [state.disabled]);

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
            <h2>Legal and Compliance</h2> {""}
            <small>Awesome! A few more details. </small>
          </TitleContainer>

          <CheckBoxContainer>
            <div style={{ marginBottom: "2rem" }}>
              <h5 style={{ marginBottom: "0", color: "#fff" }}>Please read carefully and tick the box after reading.</h5>
              <small style={{ color: "#fff" }}>Only tick the boxes after reading carefully.</small>
            </div>

            <CheckBox className="" isNotClicked={state.isNotClicked}>
              <CheckBoxBlock__wrapper>
                <CheckBoxBlock>
                  <CheckBoxInput
                    type="CheckBox"
                    name="legalAndCompliance"
                    value="Disclosure Statement"
                    onChange={(e) =>
                      appDispatch({
                        type: "disclosureStatement",
                        value: e.target.value,
                      })
                    }
                  />
                  <CheckMark />
                </CheckBoxBlock>
              </CheckBoxBlock__wrapper>
              <CheckBoxBlock__wrapper>
                <CheckBoxDetails>
                  <h3>Disclosure Statement</h3>
                  <small>I have read and understand the Disclosure Statement. I am completing this application of my own free will and can understand the language and terms used. Click here to read the Disclosure Statement.</small>
                  <a href="">
                    {" "}
                    <small>Click here to read the Disclosure Statement.</small>{" "}
                  </a>
                </CheckBoxDetails>
              </CheckBoxBlock__wrapper>
            </CheckBox>

            <CheckBox className="" isNotClicked={state.isNotClicked}>
              <CheckBoxBlock__wrapper>
                <CheckBoxBlock>
                  <CheckBoxInput
                    type="CheckBox"
                    name="legalAndCompliance"
                    value="Disclosure Statement"
                    onChange={(e) =>
                      appDispatch({
                        type: "cancellationStatement",
                        value: e.target.value,
                      })
                    }
                  />
                  <CheckMark />
                </CheckBoxBlock>
              </CheckBoxBlock__wrapper>
              <CheckBoxBlock__wrapper>
                <CheckBoxDetails>
                  <h3>Cancellation Statement</h3>
                  <small>I have read and understand the cancellation Statement. I am completing this application of my own free will and can understand the language and terms used. Click here to read the cancellation Statement.</small>
                  <a href="">
                    {" "}
                    <small>Click here to read the cancellation Statement..</small>{" "}
                  </a>
                </CheckBoxDetails>
              </CheckBoxBlock__wrapper>
            </CheckBox>

            <CheckBox className="" isNotClicked={state.isNotClicked}>
              <CheckBoxBlock__wrapper>
                <CheckBoxBlock>
                  <CheckBoxInput
                    type="CheckBox"
                    name="legalAndCompliance"
                    value="Disclosure Statement"
                    onChange={(e) =>
                      appDispatch({
                        type: "privacyWaiver",
                        value: e.target.value,
                      })
                    }
                  />
                  <CheckMark />
                </CheckBoxBlock>
              </CheckBoxBlock__wrapper>
              <CheckBoxBlock__wrapper>
                <CheckBoxDetails>
                  <h3>Privacy Waiver</h3>
                  <small>I have read and understand the Privacy waiver. I am completing this application of my own free will and can understand the language and terms used. Click here to read the Privacy waiver.</small>
                  <a href="">
                    {" "}
                    <small>Click here to read the Privacy waiver.</small>{" "}
                  </a>
                </CheckBoxDetails>
              </CheckBoxBlock__wrapper>
            </CheckBox>

            <CheckBox className="" isNotClicked={state.isNotClicked}>
              <CheckBoxBlock__wrapper>
                <CheckBoxBlock>
                  <CheckBoxInput
                    type="CheckBox"
                    name="legalAndCompliance"
                    value="Disclosure Statement"
                    onChange={(e) =>
                      appDispatch({
                        type: "creditCheck",
                        value: e.target.value,
                      })
                    }
                  />
                  <CheckMark />
                </CheckBoxBlock>
              </CheckBoxBlock__wrapper>
              <CheckBoxBlock__wrapper>
                <CheckBoxDetails>
                  <h3>Credit Check</h3>
                  <small>I have read and understand the credit check disclosure. I am completing this application of my own free will and can understand the language and terms used. Click here to read the credit check disclosure." link="Click here to read the credit check disclosure.</small>
                  <a href="">
                    {" "}
                    <small>Click here to read the credit check disclosure.</small>{" "}
                  </a>
                </CheckBoxDetails>
              </CheckBoxBlock__wrapper>
            </CheckBox>
          </CheckBoxContainer>
          <small style={{ margin: "1.675rem 0 0 0", textAlign: "center" }}>By clicking continue, you agree to all our terms and conditions.</small>
          <ButtonWrapper>{state.disabled ? <GlobalButton isDisabled> I undestand, continue</GlobalButton> : <GlobalButton filterApplicants>I undestand, continue</GlobalButton>}</ButtonWrapper>
        </FormContainer>
      </ContainerNarrower>
    </Container>
  );
}
export default LegalAndCompliance;
