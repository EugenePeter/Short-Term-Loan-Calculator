import React, { Fragment, useState } from "react";

import { TitleContainer } from "../../global-styles/global.styles";

import LoadingIcon from "./loading-icon";

function PersonalDetails() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Fragment>
      <TitleContainer>
        <h2>Checking Personal Details</h2> {""}
      </TitleContainer>
    </Fragment>
  );
}
export default PersonalDetails;
