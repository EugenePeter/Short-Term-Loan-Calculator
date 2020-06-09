import React, { Fragment } from "react";

import {
  TitleContainer,
  BodyContainer,
} from "../../global-styles/global.styles";

import { ReactComponent as DeclinedIllustration } from "../../assets/illlustrations/declined-01.svg";

import { ButtonWrapper } from "../../components/Form/form-input/form-input.styles";
import {} from "../../global-styles/GlobalButton.styles";
import { GlobalButton } from "../../global-styles/GlobalButton.styles";

function ApplicationDeclined() {
  return (
    <Fragment>
      <TitleContainer>
        <h2>Sorry</h2> {""}
        <h3 style={{ textAlign: "center" }}>
          We have to decline your application this time.
        </h3>
      </TitleContainer>

      <BodyContainer>
        <DeclinedIllustration />
        <p>As we are a responsible lender </p>
        <p>
          We care about your financial welfare. Considering your current
          circumstance and by carefull consideration you would be having a
          difficult time paying back your loan and missing your payments can get
          you into a debt trap. We dont want that.
        </p>
        <p>
          We don't care about your credit rating and can lend you even if you
          have a bad credit. We only need to verify your current circumstances
          if you are able to repay without having you fall into a debt spiral.
        </p>

        <p>Here is why we opt to decline your application:</p>
        <ul>
          <li>
            Your salary is not sufficient enough to pay back the scheduled
            repayments.
          </li>
          <li>
            You need to have at least 2% left over your salary after subracting
            all your expenses.
          </li>
          <li>Latest payment amount.</li>
        </ul>
      </BodyContainer>
      <p style={{ textAlign: "center" }}>
        We don't want to leave you hangin so we found these article that could
        help you manage your finances and help you get out of dire
        circumstances.
      </p>
      <ButtonWrapper>
        <GlobalButton>
          <a
            href="http://theincrementallife.com/top-8-money-saving-blogs-you-should-be-reading/"
            target="_blank"
          >
            Take me there
          </a>
        </GlobalButton>
      </ButtonWrapper>
    </Fragment>
  );
}

export default ApplicationDeclined;
