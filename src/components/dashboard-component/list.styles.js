import styled, { createGlobalStyle } from "styled-components";

export const Modifiers = createGlobalStyle`
  .margin-l-10 {
    margin-left: 0.58rem;
  }

  .padding-l-1 {
    padding-left: 1.70rem;

    @media screen and (min-width: 992px) {
      padding-left: 4.7rem;
    }
  }

  .padding-lr-1 {
    padding: 0 1.70rem 0 1.70rem;

    @media screen and (min-width: 992px) {
      padding: 0 1.70rem 0 1.70rem;
    }
  }

  .margin-b {
    margin: 0 0 0.58rem 0;
  }

.shadow {
-webkit-box-shadow: 0px 10px 88px -50px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 10px 88px -50px rgba(0,0,0,0.75);
box-shadow: 0px 10px 88px -50px rgba(0,0,0,1)!important;
}

`;

export const ListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5.4rem;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px 10px 88px -50px rgba(0, 0, 0, 1) !important;
  z-index: 10000;
`;

export const DateCircleBadge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px solid #55d251;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;

  small {
    margin: 0;
    padding: 0;
  }

  h4 {
    color: #55d251;
  }
`;

export const AmountWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 4rem;
  height: 4rem;

  span {
    color: #c2d2b6;
  }
  span:nth-of-type(2) {
    color: #55d251;
    font-weight: bold;
  }
  small {
    color: #ffffff;
  }
`;

export const ButtonRounded = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #55d251;
  width: 6rem;
  height: 4rem;
  border-radius: 50px;
  background-color: #fff;

  small {
    color: #ffffff;
  }
`;
