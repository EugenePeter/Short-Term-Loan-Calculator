import React, { useContext, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import Axios from "axios";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { useImmerReducer, useImmer } from "use-immer";

import {
  Container,
  ContainerNarrower,
  TitleContainer,
  ContainerRow,
} from "../../global-styles/global.styles";

import { ButtonWrapper } from "../../components/Form/form-input/form-input.styles";
import {} from "../../global-styles/GlobalButton.styles";
import { GlobalButton } from "../../global-styles/GlobalButton.styles";

import PersonalDetails from "./personal-details-validation";
import EmploymentDetails from "./employment-details-validation";
import Income from "./income-details-validation";

import ValidationIllustration from "../../components/illustration-component/validation-illustration.component.";

import ApplicationApproved from "./applicationApproved";
import ApplicationDeclined from "./applicationDeclined";

import LoadingIcon from "./loading-icon";

function Decision(props) {
  const appState = useContext(StateContext);
  const username = appState.user.username;
  const account = props.account;
  const { id } = useParams();
  // const [account, setAccount] = useState("none");
  const [state, setState] = useImmer({
    step: 1,
    account: "test",
    isValidating: true,
    isLoading: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/client-dashboard/${username}`);
  };

  return (
    <Container>
      <ContainerNarrower>
        {account ? (
          <Fragment>
            <ApplicationApproved />

            <ButtonWrapper>
              <GlobalButton onClick={handleSubmit}>
                Customer Dashboard
              </GlobalButton>
            </ButtonWrapper>
          </Fragment>
        ) : (
          <ApplicationDeclined />
        )}
      </ContainerNarrower>
    </Container>
  );
}
export default withRouter(Decision);
