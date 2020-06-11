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
  const schedule = props.details;
  const repaymentAmount = props.repaymentAmount;

  console.log(schedule);

  return (
    <Fragment>
      <Modifiers />
      <ListContainer className="padding-lr-1 margin-b shadow">
        <DateCircleBadge>
          {" "}
          <small>{schedule.day}</small>
          <h4> {schedule.date}</h4>
          <small>{schedule.month}</small>
        </DateCircleBadge>
        <CheckIcon />
        <AmountWrapper>
          <span>Amount</span>
          <span> $ {repaymentAmount} </span>
        </AmountWrapper>
        <ButtonRounded>pay now</ButtonRounded>
      </ListContainer>
    </Fragment>
  );
}
export default withRouter(List);
