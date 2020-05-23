import React, { Fragment, useContext } from "react";

import {
  Nav,
  NavItems,
  NavItemsInner,
  LogoContainer,
} from "./navigation.styles";

import SignUp from "../Form/sign-up/sign-up.component";

import { auth } from "../firebase/firebase.utils";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/dollar.svg";

import { ContainerMid } from "../../global-styles/global.styles";

import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";

const Navigation = ({ currentUsers }) => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  console.log("from nav " + currentUsers);

  function handleLogOut() {
    appDispatch({ type: "logout" });
  }

  return (
    <Fragment>
      <Nav>
        <ContainerMid>
          <LogoContainer to="/">
            <Logo className="logo" />
          </LogoContainer>
          <NavItems>
            {appState.loggedIn ? (
              <NavItemsInner onClick={handleLogOut} to="">
                sign out
              </NavItemsInner>
            ) : (
              <NavItemsInner to="/signin">returning customer</NavItemsInner>
            )}
          </NavItems>
        </ContainerMid>
      </Nav>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUsers: selectCurrentUser,
});

export default connect(mapStateToProps)(Navigation);
