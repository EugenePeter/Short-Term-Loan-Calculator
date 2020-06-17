import React, { useEffect, useContext } from "react";

import StateContext from "../../context/StateContext";

import "normalize.css";

import UserDetails from "./user-details.component";
import Requirement from "./requirement";
import Address from "./address.page";
import EmploymentDetails from "./employment-details.page";
import Expenses from "./expenses.page";
import LoanPurpose from "./loan-purpose-page";
import NextOfKin from "./next-of-kin.page";
import UploadDocuments from "./upload.documents.page";
import BankDetails from "./bank-details.page";
import LegalAndCompliance from "./legalAndCompliance.page";
import Review from "./review.page";

function MainApplication() {
  const appState = useContext(StateContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [appState.step]);

  const currentStep = appState.step;

  switch (currentStep) {
    case 1:
      return <Requirement />;

    case 2:
      return <LoanPurpose />;
    case 3:
      return <UserDetails />;
    case 4:
      return <Address />;
    case 5:
      return <EmploymentDetails />;
    case 6:
      return <Expenses />;
    case 7:
      return <NextOfKin />;
    case 8:
      return <UploadDocuments />;
    case 9:
      return <BankDetails />;
    case 10:
      return <Review />;

    case 11:
      return <LegalAndCompliance />;

    default:
  }
}

export default MainApplication;
