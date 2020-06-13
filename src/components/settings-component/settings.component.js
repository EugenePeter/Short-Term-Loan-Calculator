import React, { useContext, useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { ReactComponent as CheckIcon } from "../../assets/icons/check-icon.svg";

import { Modifiers, ListContainer, BackBtn } from "../settings-component/settings.styles";

import { TitleContainer } from "../../global-styles/global.styles";

import { Container } from "../../global-styles/global.styles";

function SettingsComponents(props) {
  const schedule = props.details;
  const repaymentAmount = props.repaymentAmount;

  console.log(schedule);

  const settingsItems = ["My details", "Update Password", "Help and Support", "Terms and Conditions", "Privacy Policy", "Sign Out"];

  return (
    <Fragment>
      <Modifiers />
      <TitleContainer className="title-styles">Settings</TitleContainer>
      <Container className="component-margin-b">
        {settingsItems.map((items) => {
          return (
            <ListContainer className="padding-lr-1  border">
              {items}
              <BackBtn />
            </ListContainer>
          );
        })}
      </Container>
    </Fragment>
  );
}
export default withRouter(SettingsComponents);
