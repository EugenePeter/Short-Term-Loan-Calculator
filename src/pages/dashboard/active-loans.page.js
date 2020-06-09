import React, { useContext, useState, Fragment } from "react";
import {
  useParams,
  Switch,
  Route,
  withRouter,
  BrowserRouter as Router,
} from "react-router-dom";

import {
  UpcomingPaymentsTitle,
  CircleIcon,
  Modifiers,
} from "./active-loans.styles";

import {
  StyledNavLink,
  NavLinkContainer,
  GlobalStyle,
} from "../../components/nav-link/nav-link.styles";

import List from "../../components/dashboard-component/list.component";

import {
  ContainerNarrower,
  Container,
  ContainerNarrow,
} from "../../global-styles/global.styles";

import LoanIndicator from "../../components/loan-indicator/loan-indicator.component";

function ActiveLoans(props) {
  const { username } = useParams();
  return (
    <Fragment>
      <Modifiers />
      <LoanIndicator />
      <UpcomingPaymentsTitle className="padding-l-1 margin-b">
        Upcoming Payments{" "}
        <CircleIcon className="margin-l-10">
          <small>4</small>
        </CircleIcon>{" "}
      </UpcomingPaymentsTitle>

      <List className="padding-l-1 margin-b" date="date" />
      <List className="padding-l-1 margin-b" date="date" />
      <List className="padding-l-1 margin-b" date="date" />
      <List className="padding-l-1 margin-b" date="date" />

      <Router>
        <NavLinkContainer>
          <StyledNavLink
            exact
            to={`/client-dashboard/${username}/overdue-payments`}
            className="nav-item nav-link"
          >
            Overdue Payments
          </StyledNavLink>
          <StyledNavLink
            to={`/client-dashboard/${username}/upcoming-payments`}
            className="nav-item nav-link"
          >
            Upcoming Payments
          </StyledNavLink>
        </NavLinkContainer>

        <Switch>
          <Route path="/client-dashboard/:username/overdue-payments">
            test
          </Route>
          <Route path="/client-dashboard/:username/upcoming-payments">
            2 test
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
export default withRouter(ActiveLoans);
