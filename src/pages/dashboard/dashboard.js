import React, {
  useContext,
  Fragment,
} from "react";
import { Link } from "react-router-dom";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import {
  Container,
  ContainerNarrower,
  TitleContainer,
} from "../../global-styles/global.styles";

import { InputWrapper } from "../application-page/application-page.styles";

import { GlobalButton } from "../../global-styles/GlobalButton.styles";

import { ButtonWrapper } from "../../components/Form/form-input/form-input.styles";

import ApplicationPage from "../application-page/application-page";
import { withRouter } from "react-router-dom";

function Dashboard(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.history.push("/warning");
  };

  function handleLogOut() {
    appDispatch({ type: "logout" });
  }

  return (
    <Fragment>
      <Container>
        <ContainerNarrower>
          <TitleContainer>
            <small>
              Hi {appState.user.username}
            </small>
            <h2>Welcome</h2> {""}
          </TitleContainer>

          <InputWrapper>
            <ApplicationPage />
            <ButtonWrapper>
              <GlobalButton
                filterApplicants
                onClick={handleSubmit}
              >
                Save And Continue
              </GlobalButton>
            </ButtonWrapper>
            <Link
              to="/"
              onClick={handleLogOut}
              style={{
                color: "#3BC453",
                width: "100%",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              Log me out
            </Link>
          </InputWrapper>
        </ContainerNarrower>
      </Container>
    </Fragment>
  );
}
export default withRouter(Dashboard);
