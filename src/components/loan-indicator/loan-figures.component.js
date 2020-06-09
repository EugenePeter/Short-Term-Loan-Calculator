import React, { useContext, useState, useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router-dom";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import Axios from "axios";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { useImmerReducer, useImmer } from "use-immer";

import {
  durationOfLoan,
  schedule,
  repayment,
  total,
  amount,
} from "../redux/calculator/repayment-amount/repayment-amount.selector";

import {
  Container,
  ContainerNarrower,
  TitleContainer,
  ContainerRow,
} from "../../global-styles/global.styles";

import {
  LoanFiGUREContainer,
  LoanFigureContainer,
} from "./loan-figures.styles";

function LoanFigures(props) {
  const { amount, durationOfLoan, schedule, repayment, total } = props;
  const account = props.account;
  const { id } = useParams();
  // const [account, setAccount] = useState("none");
  const [state, setState] = useImmer({
    step: 1,
    account: "test",
    isValidating: true,
    isLoading: true,
  });

  return (
    <LoanFigureContainer>
      <h1>{repayment}</h1>
      <h5>next payment</h5>
      <h2> {amount} </h2>
      <h5>loan amount</h5>
    </LoanFigureContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  amount,
  durationOfLoan,
  schedule,
  repayment,
  total,
});

export default connect(mapStateToProps)(withRouter(LoanFigures));
