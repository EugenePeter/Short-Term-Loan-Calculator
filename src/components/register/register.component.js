import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";
import { useImmerReducer } from "use-immer";
import { CSSTransition } from "react-transition-group";
// import DispatchContext from "../../context/DispatchContext";

import { Container, TitleContainer, ContainerNarrower } from "../../global-styles/global.styles";

import FormInput from "../../components/Form/form-input/form-input.component";

import { FormContainer, ButtonWrapper, FormBlock } from "../Form/form-input/form-input.styles";

import { Warning } from "../../global-styles/warning.styles";

import { GlobalButton } from "../../global-styles/GlobalButton.styles";

// import LoadingIcon from "../../global-styles/Loading-icons.component";

function Register(props) {
  const [setIsLoading] = useState(false);
  const initialState = {
    username: {
      value: "",
      hasErrors: false,
      message: "",
      isUnique: false,
      checkCount: 0,
    },
    email: {
      value: "",
      hasErrors: false,
      message: "",
      isUnique: false,
      checkCount: 0,
    },
    password: {
      value: "",
      hasErrors: false,
      message: "",
    },
    submitCount: 0,
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "usernameImmediately":
        draft.username.hasErrors = false;
        draft.username.value = action.value;
        if (draft.username.value.length > 30) {
          draft.username.hasErrors = true;
          draft.username.message = "Username cannot exceed 30 characters.";
        }
        if (draft.username.value && !/^([a-zA-Z0-9]+)$/.test(draft.username.value)) {
          draft.username.hasErrors = true;
          draft.username.message = "Username can only contain letters and numbers.";
        }
        return;
      case "usernameAfterDelay":
        if (draft.username.value.length < 3) {
          draft.username.hasErrors = true;
          draft.username.message = "Username must be at least 3 characters.";
        }
        if (!draft.hasErrors && !action.noRequest) {
          draft.username.checkCount++;
        }
        return;
      case "usernameUniqueResults":
        if (action.value) {
          draft.username.hasErrors = true;
          draft.username.isUnique = false;
          draft.username.message = "That username is already taken.";
        } else {
          draft.username.isUnique = true;
        }
        return;
      case "emailImmediately":
        draft.email.hasErrors = false;
        draft.email.value = action.value;
        return;
      case "emailAfterDelay":
        if (!/^\S+@\S+$/.test(draft.email.value)) {
          draft.email.hasErrors = true;
          draft.email.message = "You must provide a valid email address.";
        }
        if (!draft.email.hasErrors && !action.noRequest) {
          draft.email.checkCount++;
        }
        return;
      case "emailUniqueResults":
        if (action.value) {
          draft.email.hasErrors = true;
          draft.email.isUnique = false;
          draft.email.message = "That email is already being used.";
        } else {
          draft.email.isUnique = true;
        }
        return;
      case "passwordImmediately":
        draft.password.hasErrors = false;
        draft.password.value = action.value;
        if (draft.password.value.length > 50) {
          draft.password.hasErrors = true;
          draft.password.message = "Password cannot exceed 50 characters.";
        }
        return;
      case "passwordAfterDelay":
        if (draft.password.value.length < 12) {
          draft.password.hasErrors = true;
          draft.password.message = "Password must be at least 12 characters.";
        }
        return;
      case "submitForm":
        if (!draft.username.hasErrors && draft.username.isUnique && !draft.email.hasErrors && draft.email.isUnique && !draft.password.hasErrors) {
          draft.submitCount++;
        }
        return;
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  useEffect(() => {
    if (state.username.value) {
      const delay = setTimeout(() => dispatch({ type: "usernameAfterDelay" }), 200);
      return () => clearTimeout(delay);
    }
  }, [state.username.value]);

  useEffect(() => {
    if (state.email.value) {
      const delay = setTimeout(() => dispatch({ type: "emailAfterDelay" }), 800);
      return () => clearTimeout(delay);
    }
  }, [state.email.value]);

  useEffect(() => {
    if (state.password.value) {
      const delay = setTimeout(() => dispatch({ type: "passwordAfterDelay" }), 800);
      return () => clearTimeout(delay);
    }
  }, [state.password.value]);

  //Check if a username already exist
  useEffect(() => {
    if (state.username.checkCount) {
      const ourRequest = Axios.CancelToken.source();
      async function fetchResults() {
        try {
          const response = await Axios.post("https://cashifiedbackend.herokuapp.com/doesUsernameExist", { username: state.username.value }, { cancelToken: ourRequest.token });
          dispatch({ type: "usernameUniqueResults", value: response.data });
        } catch (e) {
          console.log("There was a problem or the request was cancelled.");
        }
      }
      fetchResults();
      return () => ourRequest.cancel();
    }
  }, [state.username.checkCount]);

  //Check if an email already exist
  useEffect(() => {
    if (state.email.checkCount) {
      const ourRequest = Axios.CancelToken.source();
      async function fetchResults() {
        try {
          const response = await Axios.post("https://cashifiedbackend.herokuapp.com/doesEmailExist", { email: state.email.value }, { cancelToken: ourRequest.token });
          dispatch({ type: "emailUniqueResults", value: response.data });
        } catch (e) {
          console.log("There was a problem or the request was cancelled.");
        }
      }
      fetchResults();
      return () => ourRequest.cancel();
    }
  }, [state.email.checkCount]);

  //register applicant
  useEffect(() => {
    if (state.submitCount) {
      const ourRequest = Axios.CancelToken.source();
      async function fetchResults() {
        try {
          setIsLoading(true);
          const response = await Axios.post(
            "https://cashifiedbackend.herokuapp.com/register",
            {
              username: state.username.value,
              email: state.email.value,
              password: state.password.value,
            },
            { cancelToken: ourRequest.token }
          );
          // dispatch({ type: "login", data: response.data });
          setIsLoading(false);
          dispatch({
            type: "flashMessage",
            value: "Congrats! Welcome to your new account.",
          });
          props.history.push("/signin");
        } catch (e) {
          console.log(e);
        }
      }
      fetchResults();
      return () => ourRequest.cancel();
    }
  }, [state.submitCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "usernameImmediately", value: state.username.value });
    dispatch({
      type: "usernameAfterDelay",
      value: state.username.value,
      noRequest: true,
    });
    dispatch({ type: "emailImmediately", value: state.email.value });
    dispatch({
      type: "emailAfterDelay",
      value: state.email.value,
      noRequest: true,
    });
    dispatch({ type: "passwordImmediately", value: state.password.value });
    dispatch({ type: "passwordAfterDelay", value: state.password.value });
    dispatch({ type: "submitForm" });

    // console.log("the username is" + state.username.message);
    // console.log("the email is" + state.email.message);
    // console.log("the password is" + state.password.message);
  };

  return (
    <Container>
      <ContainerNarrower>
        <FormContainer onSubmit={handleSubmit}>
          <FormBlock>
            <TitleContainer>
              <h2>Register</h2> {""}
              <small>Tell us more about you</small>
            </TitleContainer>
          </FormBlock>
          <FormInput
            onChange={(e) =>
              dispatch({
                type: "usernameImmediately",
                value: e.target.value,
              })
            }
            name="username"
            type="text"
            value={state.username.value}
            label="User Name"
          />

          <CSSTransition in={state.username.hasErrors} timeout={330} classNames="liveValidateMessage" unmountOnExit>
            <Warning className="alert alert-danger small liveValidateMessage">{state.username.message}</Warning>
          </CSSTransition>

          <FormInput
            onChange={(e) =>
              dispatch({
                type: "emailImmediately",
                value: e.target.value,
              })
            }
            name="email"
            type="text"
            value={state.email.value}
            label="email"
          />

          <CSSTransition in={state.email.hasErrors} timeout={330} classNames="liveValidateMessage" unmountOnExit>
            <Warning className="alert alert-danger small liveValidateMessage">{state.email.message}</Warning>
          </CSSTransition>

          <FormInput
            onChange={(e) =>
              dispatch({
                type: "passwordImmediately",
                value: e.target.value,
              })
            }
            name="password"
            type="password"
            value={state.password.value}
            label="password"
          />

          <CSSTransition in={state.password.hasErrors} timeout={330} classNames="liveValidateMessage" unmountOnExit>
            <Warning className="alert alert-danger small liveValidateMessage">{state.password.message}</Warning>
          </CSSTransition>

          <ButtonWrapper>
            <GlobalButton filterApplicants>Save And Continue</GlobalButton>
          </ButtonWrapper>
          <Link to="/signin" style={{ color: "#3BC453" }}>
            I already have an account
          </Link>
        </FormContainer>
      </ContainerNarrower>
    </Container>
  );
}

export default withRouter(Register);
