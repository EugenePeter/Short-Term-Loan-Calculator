import React, { useContext, useEffect, Fragment } from "react";

import {
  useParams,
  Switch,
  Route,
  withRouter,
  BrowserRouter as Router,
} from "react-router-dom";

import Axios from "axios";

import {
  StyledNavLink,
  NavLinkContainer,
  GlobalStyle,
} from "../../components/nav-link/nav-link.styles";

// import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { useImmer } from "use-immer";

import { Container } from "../../global-styles/global.styles";

import ActiveLoans from "./active-loans.page";

function ClientDashboard(props) {
  const { username } = useParams();
  const appState = useContext(StateContext);
  const [state, setState] = useImmer({
    profileData: {
      profileUsername: "...Eugenio pedro",
      profileAvatar: "https://gravatar.com/avatar/placeholder?s=128",
      isFollowing: false,
      counts: { postCount: "", followerCount: "", followingCount: "" },
      email: "",
    },
  });

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();

    async function fetchData() {
      try {
        const response = await Axios.post(
          `http://localhost:8080/profile/${username}`,
          { token: appState.user.token },
          { cancelToken: ourRequest.token }
        );
        setState((draft) => {
          draft.profileData = response.data;
        });
        console.log(JSON.stringify(response.data));
      } catch (e) {
        console.log(e + "There was a problem.");
      }
    }
    fetchData();
    return () => {
      ourRequest.cancel();
    };
  }, []);

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
            <Route path="/client-dashboard/:username/recent-loans">test</Route>
          </Switch>

          <NavLinkContainer>
            <StyledNavLink
              exact
              to={`/client-dashboard/${state.profileData.profileUsername}`}
              className="nav-item nav-link"
            >
              Overdue Payments
            </StyledNavLink>
            <StyledNavLink
              to={`/client-dashboard/${
                state.profileData.profileUsername
              }/recent-loans`}
              className="nav-item nav-link"
            >
              Upcoming Payments
            </StyledNavLink>
          </NavLinkContainer>
        </Router>
      </Container>
    </Fragment>
  );
}
export default withRouter(ClientDashboard);
