import styled, { css, createGlobalStyle } from "styled-components";

import { Link } from "react-router-dom";

export const Modifiers = createGlobalStyle`
.logo {
  position: relative;
  width: 46%;
  box-sizing: border-box;
}

.margin-t {
  margin-top: 1rem;
}
`;

export const Nav = styled.nav`
  position: relative;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  /* margin-bottom: 25px; */
  /* background-color: white; */
  padding-top: 1rem;
  padding-bottom: 1rem;

  a {
    text-decoration: none;
    color: #3bc453;
  }
`;

const home = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const getLogoContainerStyles = (props) => {
  if (props.home) {
    return home;
  }
};

export const LogoContainer = styled(Link)`
  position: relative;
  height: 100%;
  width: 68% !important;
  /* padding: 25px; */
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    /* cursor: pointer; */
  }

  ${getLogoContainerStyles}

  @media screen and (min-width: 768px) {
    max-width: 16%;
  }
`;

export const NavItems = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavItemsInner = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
