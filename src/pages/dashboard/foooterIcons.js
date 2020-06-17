import React,  from "react";
import {  withRouter } from "react-router-dom";




import { NavLinkBottomRow } from "../../components/nav-link/nav-link.styles";

import List from "../../components/dashboard-component/list.component";



import { ReactComponent as Settings } from "../../assets/icons/client-dashboard-icons/settings-3.svg";
import { ReactComponent as Contact } from "../../assets/icons/client-dashboard-icons/contact.svg";
import { ReactComponent as Notifications } from "../../assets/icons/client-dashboard-icons/notification.svg";
import { ReactComponent as Website } from "../../assets/icons/client-dashboard-icons/website.svg";

function FooterIcons(props) {


  return (
    <NavLinkBottomRow>
      <Website />
      <Contact />

      <Notifications />
    </NavLinkBottomRow>
  );
}

export default withRouter(FooterIcons);
