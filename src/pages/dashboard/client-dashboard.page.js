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
  NavLinkBottom,
  NavLinkBottomWrapper,
  NavLinkBottomRow,
} from "../../components/nav-link/nav-link.styles";

import StateContext from "../../context/StateContext";
import { useImmer } from "use-immer";
import { Container } from "../../global-styles/global.styles";
import ActiveLoans from "./active-loans.page";

import { ReactComponent as Settings } from "../../assets/icons/client-dashboard-icons/setting.svg";
import { ReactComponent as Contact } from "../../assets/icons/client-dashboard-icons/contact.svg";
import { ReactComponent as Notifications } from "../../assets/icons/client-dashboard-icons/notification.svg";
import { ReactComponent as Website } from "../../assets/icons/client-dashboard-icons/website.svg";

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
          `https://cashifiedbackend.herokuapp.com/profile/${username}`,
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
      <Container className="full-height">
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
              Recent Loans
            </Route>
            <Route path="/client-dashboard/:username/overdue-payments">
              Overdue Payments
            </Route>
          </Switch>

          <NavLinkBottom className="shadow-bottom">
            <NavLinkContainer>
              <StyledNavLink
                exact
                to={`/client-dashboard/${
                  state.profileData.profileUsername
                }/ovedue-payments`}
                className="nav-item nav-link"
              >
                Overdue Payments
              </StyledNavLink>
            </NavLinkContainer>

            <NavLinkBottomRow>
              <Contact />
              <Notifications />
              <Settings />
            </NavLinkBottomRow>
          </NavLinkBottom>
        </Router>
      </Container>
    </Fragment>
  );
}
export default withRouter(ClientDashboard);
