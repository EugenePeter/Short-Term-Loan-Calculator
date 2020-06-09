import React, {
  Component,
  Fragment,
  useState,
  useEffect,
  useContext,
} from "react";

import {
  Container,
  ContainerNarrower,
  TitleContainer,
  ContainerRow,
} from "../../global-styles/global.styles";

import LoadingIcon from "./loading-icon";

function PersonalDetails() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 10000);
  // }, []);

  return (
    <Fragment>
      <TitleContainer>
        <h2>Checking Personal Details</h2> {""}
      </TitleContainer>
    </Fragment>
  );
}
export default PersonalDetails;
