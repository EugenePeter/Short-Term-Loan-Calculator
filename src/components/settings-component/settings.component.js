import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import DispatchContext from "../../context/DispatchContext";

import { Modifiers, ListContainer, BackBtn, StyledLink } from "../settings-component/settings.styles";

import { TitleContainer } from "../../global-styles/global.styles";

import { Container } from "../../global-styles/global.styles";

function SettingsComponents(props) {
  const appDispatch = useContext(DispatchContext);

  const settingsItems = [
    { id: 1, item: "My details" },
    { id: 2, item: "Update Password" },
    { id: 3, item: "Help and Support" },
    { id: 4, item: "Terms and Conditions" },
    { id: 5, item: "Privacy Policy" },
    {
      id: 6,
      item: "Sign Out",
      event: function handleLogOut() {
        appDispatch({ type: "logout" });
      },
    },
  ];

  return (
    <Fragment>
      <Modifiers />
      <TitleContainer className="title-styles">Settings</TitleContainer>
      <Container className="component-margin-b">
        {settingsItems.map((items) => {
          return (
            <StyledLink onClick={items.event} to="/" key={items.id} className="full-width">
              <ListContainer key={items.id} className="padding-lr-1  border">
                {items.item}
                <BackBtn />
              </ListContainer>
            </StyledLink>
          );
        })}
      </Container>
    </Fragment>
  );
}
export default SettingsComponents;
