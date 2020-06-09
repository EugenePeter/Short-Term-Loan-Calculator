import React, { useContext, useState, Fragment } from "react";

import {
  useParams,
  Switch,
  Route,
  withRouter,
  NavLink,
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

import {
  StyledNavLink,
  NavLinkContainer,
  GlobalStyle,
} from "../../components/nav-link/nav-link.styles";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { useImmerReducer, useImmer } from "use-immer";

import {
  Container,
  ContainerNarrower,
  TitleContainer,
  ContainerRow,
} from "../../global-styles/global.styles";

import ActiveLoans from "./active-loans.page";

function ClientDashboard(props) {
  const { username } = useParams();
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.history.push("/warning");
  };

  var date = new Date("2020/6/1");
  var next = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function format(d) {
    return d.getDate() + " " + days[d.getDay()] + ", " + months[d.getMonth()];
  }

  console.log("Starting day is " + format(date));
  const week = 7;
  const fornight = 14;
  const month = 30;
  for (var i = 0; i < 10; i++) {
    next = new Date(
      next.getFullYear(),
      next.getMonth(),
      next.getDate() + month
    );
    console.log("Next week is " + format(next));
  }

  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }

  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }

  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }

  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <Router>
          <NavLinkContainer>
            <StyledNavLink
              exact
              to={`/client-dashboard/${username}`}
              className="nav-item nav-link"
            >
              Active Loans
            </StyledNavLink>
            <StyledNavLink
              to={`/client-dashboard/${username}/recent-loans`}
              className="nav-item nav-link"
            >
              Recent Loans
            </StyledNavLink>
          </NavLinkContainer>

          <Switch>
            <Route exact path="/client-dashboard/:username">
              <ActiveLoans />
            </Route>
            <Route path="/client-dashboard/:username/recent-loans">
              <ActiveLoans />
            </Route>
          </Switch>
        </Router>
      </Container>
    </Fragment>
  );
}
export default withRouter(ClientDashboard);
