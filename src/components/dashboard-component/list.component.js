import React, { useContext, useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { ReactComponent as CheckIcon } from "../../assets/icons/check-icon.svg";

import {
  Modifiers,
  ListContainer,
  DateCircleBadge,
  AmountWrapper,
  ButtonRounded,
} from "../dashboard-component/list.styles";

import {} from "../../components/dashboard-component/list.styles";

function List(props) {
  const date = props.date;
  return (
    <Fragment>
      <Modifiers />
      <ListContainer className="padding-lr-1 margin-b shadow">
        <DateCircleBadge>
          {" "}
          <small>sat</small>
          <h4> {date}</h4>
          <small>09</small>
        </DateCircleBadge>
        <CheckIcon />
        <AmountWrapper>
          <span>Amount</span>
          <span>$309.97</span>
        </AmountWrapper>
        <ButtonRounded>pay now</ButtonRounded>
      </ListContainer>
    </Fragment>
  );
}
export default withRouter(List);
