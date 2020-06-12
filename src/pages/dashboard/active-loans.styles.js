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

  .margin-b {
    margin: 0 0 0.58rem 0;
  }

  .shadow {
    -webkit-box-shadow: 0px 10px 88px -50px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 10px 88px -50px rgba(0,0,0,0.75);
    box-shadow: 0px 10px 88px -50px rgba(0,0,0,1)!important;
    }

    .component-margin-b {
      width: 100%;
      margin: 0 0 6.47rem 0;
      padding: 0;
    }

`;

export const UpcomingPaymentsTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 2.7rem;
  box-sizing: border-box;
  font-weight: bold;
  padding: 2rem 0 2rem 0;
`;

export const CircleIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c4d4b8;
  color: #ffffff;
  width: 20px;
  height: 20px;
  border-radius: 25px;

  small {
    color: #ffffff;
  }
`;
