import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Axios from "axios";

// import DispatchContext from "../../context/DispatchContext";
// import StateContext from "../../context/StateContext";

import { Container } from "../../global-styles/global.styles";

function Test(props) {
  // const appState = useContext(StateContext);
  // const appDispatch = useContext(DispatchContext);
  const { id } = useParams();
  const [setIsLoading] = useState(true);
  const [post, setPost] = useState();

  useEffect(() => {
    const token = localStorage.appToken;
    const ourRequest = Axios.CancelToken.source();
    console.log(token);
    async function fetchPost() {
      try {
        const response = await Axios.get(`http://localhost:8080/applicant/${id}`, {
          token: token,
        });
        // console.log(response.data);
        setPost(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e.response.data + "There was a problem or the request was cancelled.");
      }
    }
    fetchPost();
    return () => {
      ourRequest.cancel();
    };
  }, [id]);

  console.log(post);

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>DASHBOARD DESIGN WILL FOLLOW</h1>
    </Container>
  );
}
export default Test;
