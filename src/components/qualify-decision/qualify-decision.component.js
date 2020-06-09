import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router-dom";

import Axios from "axios";

import { useImmer } from "use-immer";

import {
  Container,
  ContainerNarrower,
} from "../../global-styles/global.styles";

import PersonalDetails from "./personal-details-validation";
import EmploymentDetails from "./employment-details-validation";
import Income from "./income-details-validation";
import Decision from "./loanStatus.component";

import ValidationIllustration from "../../components/illustration-component/validation-illustration.component.";

import ApplicationApproved from "./applicationApproved";

import LoadingIcon from "./loading-icon";

function QualifyDecision(props) {
  const { id } = useParams();
  // const [account, setAccount] = useState("none");
  const [state, setState] = useImmer({
    step: 1,
    account: "test",
    isValidating: true,
    isLoading: true,
    count: "",
  });

  useEffect(() => {
    const token = localStorage.appToken;
    const ourRequest = Axios.CancelToken.source();
    async function fetchPost() {
      try {
        const response = await Axios.get(
          `http://localhost:8080/check-qualification/${id}`,
          {
            cancelToken: ourRequest.token,
          }
        );
        setState((draft) => {
          draft.account = response.data;
        });
        console.log(response.data);
      } catch (e) {
        console.log(e + "There was a problem or the request was cancelled.");
      }
    }
    fetchPost();
    return () => {
      ourRequest.cancel();
    };
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setState((draft) => {
        draft.step++;
      });
    }, 5000);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setState((draft) => {
        draft.step++;
      });
    }, 8000);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setState((draft) => {
        draft.isValidating = false;
        draft.isLoading = false;
      });
    }, 10000);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!state.isLoading) {
      setState((draft) => {
        draft.count++;
      });
    }
  }, [state.isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/applicant/${state.account}`);
  };

  console.log("account is " + state.account);

  const Validate = () => {
    const step = state.step;
    switch (step) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <EmploymentDetails />;
      case 3:
        return <Income />;

      default:
    }
  };

  return (
    <Container>
      {" "}
      <ContainerNarrower>
        {state.isLoading ? <LoadingIcon /> : ""}
        {state.isLoading ? <Validate /> : ""}
        {state.isLoading ? <ValidationIllustration /> : ""}
        {state.count ? <Decision account={state.account} /> : ""}
      </ContainerNarrower>
    </Container>
  );
}
export default withRouter(QualifyDecision);
