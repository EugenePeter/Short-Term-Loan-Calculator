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

function Income() {
  const [isLoading, setIsLoading] = useState(true);

  // setTimeout(() => {
  //   setIsLoading(false);
  // }, 10000);

  return (
    <Fragment>
      <TitleContainer>
        <h2>Validating Income</h2> {""}
      </TitleContainer>
    </Fragment>
  );
}

export default Income;