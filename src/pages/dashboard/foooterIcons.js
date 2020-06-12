import React, { useContext, useState, Fragment, useEffect } from "react";
import {
  useParams,
  Switch,
  Route,
  withRouter,
  BrowserRouter as Router,
} from "react-router-dom";
import { useImmerReducer, useImmer } from "use-immer";

import StateContext from "../../context/StateContext";

import Axios from "axios";

import {
  UpcomingPaymentsTitle,
  CircleIcon,
  Modifiers,
} from "./active-loans.styles";

import {
  StyledNavLink,
  NavLinkContainer,
  GlobalStyle,
  NavLinkBottomRow,
} from "../../components/nav-link/nav-link.styles";

import List from "../../components/dashboard-component/list.component";

import {} from "../../global-styles/global.styles";

import LoanIndicator from "../../components/loan-indicator/loan-indicator.component";

import LoadingIcon from "../../global-styles/Loading-icons.component";

import { ReactComponent as Settings } from "../../assets/icons/client-dashboard-icons/settings-3.svg";
import { ReactComponent as Contact } from "../../assets/icons/client-dashboard-icons/contact.svg";
import { ReactComponent as Notifications } from "../../assets/icons/client-dashboard-icons/notification.svg";
import { ReactComponent as Website } from "../../assets/icons/client-dashboard-icons/website.svg";

function FooterIcons(props) {
  const { username } = useParams();

  return (
    <NavLinkBottomRow>
      <Website />
      <Contact />

      <Notifications />
    </NavLinkBottomRow>
  );
}

export default withRouter(FooterIcons);
