import styled from "styled-components";

import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  /* margin-bottom: 25px; */
  background-color: white;

  a {
    text-decoration: none;
    color: #3bc453;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  /* padding: 25px; */
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    /* cursor: pointer; */
  }

  .logo {
    width: 40px;
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
