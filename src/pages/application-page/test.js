import React, { useContext, useState, useEffect } from "react";

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

import { GlobalButton, BackBtn } from "../../global-styles/GlobalButton.styles";

import {
  FormContainer,
  FormInputContainer,
  ButtonWrapper,
  FormInputSpan,
  GroupContainer,
} from "../../components/Form/form-input/form-input.styles";

import RadioBlockComponent from "../../components/Form/tabs-component/RadioBlock.component";
import { JobType } from "../../components/Form/job-type/radioBtnContainer";
import { RadioContainer } from "../../components/Form/tabs-component/RadioInputBlock.styles";

function Test(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState();

  useEffect(() => {
    const token = localStorage.appToken;
    const ourRequest = Axios.CancelToken.source();
    console.log(token);
    async function fetchPost() {
      try {
        const response = await Axios.get(
          `http://localhost:8080/applicant/${id}`,
          {
            token: token,
          }
        );
        // console.log(response.data);
        setPost(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log(
          e.response.data + "There was a problem or the request was cancelled."
        );
      }
    }
    fetchPost();
    return () => {
      ourRequest.cancel();
    };
  }, [id]);

  console.log(post);

  const handleSubmit = async (e) => {
    e.preventDefault();
    appDispatch({ type: "submit" });
  };

  const handleBack = (e) => {
    e.preventDefault();
    appDispatch({ type: "back" });
  };
  return (
    <Container>
      <h1>This is our test for today</h1>
    </Container>
  );
}
export default Test;
