import React, {
  Component,
  Fragment,
  useState,
  useEffect,
  useContext,
} from "react";

import DispatchContext from "../context/DispatchContext";
import StateContext from "../context/StateContext";

import { useImmerReducer } from "use-immer";

import { Container, ContainerNarrower } from "../global-styles/global.styles";

function CalculatorPage() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  // const firstName = appState.personalDetails.firstName;

  const handleSubmit = (e) => {
    e.preventDefault();
    appDispatch({ type: "nxtStep" });
  };

  const handleBack = (e) => {
    e.preventDefault();
    appDispatch({ type: "back" });
  };

  return (
    <Container>
      {" "}
      {appState}
      <h1>this is a test</h1>
    </Container>
  );
}
export default CalculatorPage;
