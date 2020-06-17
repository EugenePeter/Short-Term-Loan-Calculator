import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  .narrower {
   width: 76%;
  }
  .white-background {
    background-color: #fff;
    margin: 0.58rem 0 0.58rem 0;
    padding: 0.94rem 0 0.94rem 0;
    -webkit-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
    -moz-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
    box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, .3) !important;
  }
`;

export const LoanFigureContainer = styled.div`
  position: absolute;
  width: 50%;
  height: 50%
  /* background-color: blue; */
  text-align: center;
  display: flex; 
  flex-direction: column;
  justify-content: center;

  top: 25%;
  /* transform: translateY(-50%); */
  left: 25%;
  /* transform: translateX(-20%); */

  h1{
    margin-bottom: 0;
    padding: 0;
    font-size: 2rem;
    color: #55d251;
  }

  h3,h4, h5 {
    margin-top: 0;
    margin-bottom: 1rem;;
    padding: 0;
  }

`;
