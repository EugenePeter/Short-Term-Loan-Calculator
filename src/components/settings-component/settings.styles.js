import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const mainColorGreen = "#3BC453";

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
    padding: 0.8rem 1.70rem 0.8rem 1.70rem;

    @media screen and (min-width: 992px) {
      padding: 0 1.70rem 0 1.70rem;
    }
  }

  .margin-b {
    margin: 0 0 0.58rem 0;
  } 

  .border {
    border-bottom: .2px solid #707070;
  }

  .component-margin-b {
    margin: 0 0 6.47rem 0;
  }
  
  .title-styles {
   background-color: #fff;
   font-weight: bold;
   margin: 0;
   padding: 2rem 0 2rem 0;
   height: 4.7rem;
    border-bottom: 0.1px solid #C9C9C9;
   box-shadow: 0px 22px 28px -20px rgba(0,0,0,0.25);
   z-index: 2000;
   
  }

  .full_width {

  }

  

.shadow {
-webkit-box-shadow: 0px 10px 88px -50px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 10px 88px -50px rgba(0,0,0,0.75);
box-shadow: 0px 10px 60px -50px rgba(0,0,0,1)!important;
}

`;

export const StyledLink = styled(Link)`
  width: 100% !important;
  text-decoration: none;
  color: #a5a5a5;

  &:hover {
    background-color: #f8fdff;
  }
`;

export const BackBtn = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border: solid;
  border-width: 0 0.2rem 0.2rem 0;
  border-radius: 4px;
  border-color: ${mainColorGreen};
  /* -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg); */
  transform: rotate(-45deg);
  display: inline-block;
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
  -webkit-box-shadow: -1px 30px 24px -34px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -1px 30px 24px -34px rgba(0, 0, 0, 0.2);
  box-shadow: -1px 30px 24px -34px rgba(0, 0, 0, 0.2) !important;

  &:nth-of-type(4) {
    margin-botton: 100px;
  }

  &:last-of-type {
    border: none;
  }
  /* z-index: 100; */
`;

export const DateCircleBadge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px solid #a1d5a0;
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

  box-shadow: 0px 18px 10px -14px rgba(0, 0, 0, 0.2);

  small {
    color: #ffffff;
  }
`;
