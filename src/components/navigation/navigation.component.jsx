import React, { Fragment, useContext } from "react";

import { Nav, NavItems, NavItemsInner, LogoContainer, Modifiers } from "./navigation.styles";

// import { auth } from "../firebase/firebase.utils";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/icons/cashfull-logo-2.svg";
import { useLocation } from "react-router-dom";

import { ContainerMid } from "../../global-styles/global.styles";

import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";

const Navigation = ({ currentUsers }) => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  console.log("from nav " + currentUsers);
  let location = useLocation();

  const currentLocation = location.pathname;
  // const compareLocation = "/dashboard";
  // const compareLocationTwo = "main-application";

  console.log(location.pathname);

  function handleLogOut() {
    appDispatch({ type: "logout" });
  }

  return (
    <Fragment>
      <Modifiers />
      {currentLocation === "/" && (
        <Nav>
          <LogoContainer home to="/">
            <Logo className="logo" />
          </LogoContainer>
        </Nav>
      )}

      {currentLocation === "/client-dashboard/:username" && (
        <Nav>
          <ContainerMid>
            <LogoContainer to="/">
              <Logo className="logo " />
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
      )}
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUsers: selectCurrentUser,
});

export default connect(mapStateToProps)(Navigation);
