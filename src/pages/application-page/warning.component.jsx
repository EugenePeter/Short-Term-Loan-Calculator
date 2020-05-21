import React, { Fragment, useContext } from "react";
import "normalize.css";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { createStructuredSelector } from "reselect";

import { WarningContainer, WarningInner } from "./application-page.styles";

import CustomButton from "../../components/custom-button/custom-button.component";

const Warning = ({ history, props }) => {
  return (
    <WarningContainer>
      <WarningInner>
        <h2>Warning about borrowing</h2>
        <p>Borrowing can be expensive</p>
        <CustomButton
          onClick={(event) => {
            event.preventDefault();
            history.push("./main-application");
          }}
          warning
        >
          {" "}
          CONTINUE
        </CustomButton>
      </WarningInner>
    </WarningContainer>
  );
};

export default withRouter(Warning);
