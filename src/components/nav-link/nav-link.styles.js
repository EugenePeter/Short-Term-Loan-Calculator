import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
body {
  background-color: #EDF3F6;
}

.test{
  height: 500px;
}

.shadow-bottom{
  width: 100%;

  -webkit-box-shadow: 0px -101px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -101px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 14px -20px rgba(0, 0, 0, 0.75) !important;
}

.full-height {
  height: 100vh;
  display: flex;
}

.max-width__mobile-width {
  width: 50rem!important;
}

  .loan-nav {
    &[aria-current="page"] {
      background: #fff;
      color: #7ece42;
      border: 2px solid #7ece42;
  
      &:hover,
      &:focus {
        &:after {
          background: #fff;
        }
      }
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: center;
  line-height: 2.7rem;
  color: #a5a5a5;
  text-decoration: none;
  margin: 0.5rem;
  padding: 0;
  width: 50%;
  text-align: center;
  box-sizing: border-box;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  background-color: #fff;
  border-bottom: 0.25px solid #dedede;

  /* -webkit-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
  -moz-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
  box-shadow: -4px 39px 59px 4px rgba(0, 0, 0, 1); */
`;

export const NavLinkBottom = styled.div`
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  bottom: 0;
  margin: 0;
  padding: 0;

  -webkit-box-shadow: -1px -31px 24px -34px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -1px -31px 24px -34px rgba(0, 0, 0, 0.2);
  box-shadow: -1px -31px 24px -34px rgba(0, 0, 0, 0.2);
`;

export const NavLinkBottomWrapper = styled.div`
  height: 2.7rem;
  background-color: #fff;
`;

export const NavLinkBottomRow = styled.div`
  position: relative;
  display: flex;
  height: 2.7rem;
  background-color: #fff;

  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
`;
