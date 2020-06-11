import React, { Fragment } from "react";

import { TitleContainer, BodyContain } from "../../global-styles/global.styles";

import { ReactComponent as Congrats } from "../../assets/illlustrations/congrats-01.svg";

function ApplicationApproved() {
  return (
    <Fragment>
      <TitleContainer>
        <h2>Congratulations</h2> {""}
        <h3 style={{ textAlign: "center" }}>
          We are pleased to tell you that your loan is approved
        </h3>
      </TitleContainer>

      <Congrats />
      <h3 style={{ textAlign: "center" }}>
        Thank you for trusting us {localStorage.appUsername}!
      </h3>

      <p>You can now login to our customer dashboard.</p>
      <p>
        To get real time update about the status of your loan application, Just
        login on our customer dashboard
      </p>

      <p>Inside the dashboard you can find information about:</p>
      <ul>
        <li>Status of your loan application.</li>
        <li>Remaining loan balance.</li>
        <li>Latest payment amount.</li>
        <li>Next payment date.</li>
        <li>Next payment amount.</li>
        <li>loan status(paid in full/repayments left.)</li>
        <li>And other details</li>
      </ul>

      <p style={{ textAlign: "center" }}>
        Click the customer dashboard button below to login.
      </p>
    </Fragment>
  );
}

export default ApplicationApproved;
