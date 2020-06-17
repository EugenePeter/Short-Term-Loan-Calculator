import styled, {
  createGlobalStyle,
} from "styled-components";

export const Modifiers = createGlobalStyle`
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
