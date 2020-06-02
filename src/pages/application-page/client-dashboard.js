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

function ClientDashboard(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const { username } = useParams();

  const [state, setState] = useImmer({
    followActionLoading: false,
    startFollowingRequestCount: 0,
    stopFollowingRequestCount: 0,
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
          { token: localStorage.appToken },
          { cancelToken: ourRequest.token }
        );
        console.log("response data is " + response.data);
        setState((draft) => {
          draft.profileData = response.data;
        });
        console.log({ response });
      } catch (e) {
        console.log(e + "There was a problem.");
      }
    }

    fetchData();
    return () => {
      ourRequest.cancel();
    };
  }, []);

  console.log(" the state is " + state.profileData.email);

  return (
    <Container>
      <h1>ClientDashboard</h1>
      <p>{state.profileData.profileUsername}</p>
      <p>ddddd{state.profileData.email}</p>
    </Container>
  );
}
export default ClientDashboard;
