import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
body {
  background-color: #EDF3F6;
}

.test{
  height: 500px;
}

.tt {
  background-color: green;
  width: 100%;
  -webkit-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
  -moz-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
  box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1) !important;
}

`;

export const StyledNavLink = styled(NavLink)`
  line-height: 2.7rem;
  color: #a5a5a5;
  text-decoration: none;
  margin: 0;
  padding: 0;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  background-color: #fff;

  -webkit-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
  -moz-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
  box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1) !important;
`;
