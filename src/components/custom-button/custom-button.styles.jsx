import styled, { css, keyframes } from "styled-components";

const warning = css`
  background-color: white;
  color: #4bc869;
`;

const signInButton = css`
  font-size: 12px;
  margin-bottom: 10px;
  background-color: #18de88;
  width: 100%;
`;

const googleSignInButton = css`
    font-size: 12px;
    margin-top;
    background-color: #18DE88;
`;

const defaultButton = css`
  background-color: #3bc453;
`;

// const clickedBtn = css`
//         display: ${({isActive}) => isActive ? 'none' : 'inline-block'
//         };
// `;

const getButtonStyles = (props) => {
  if (props.signIn) {
    return signInButton;
  }

  if (props.warning) {
    return warning;
  }

  return props.googleSignIn ? googleSignInButton : defaultButton;
};

export const CustomButtonContainer = styled.button`
  width: 100%;
  height: 60px;
  letter-spacing: 0.5px;
  line-height: 50px;
  /* padding: 0 35px 0 35px; */
  font-size: 15px;

  border-radius: 50px;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed" !important;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: ${({ isActive }) => (isActive ? "none" : "inline-block")};

  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid #3bc453;
  }

  &.inverted {
    background-color: #3bc453;
    color: black;
    border: 4px solid black;
    &:hover {
      background-color: #3bc453;
      color: white;
      border: none;
    }
  }

  ${getButtonStyles}
`;

const test = keyframes`
    0%{
        transform: translateY(-70%);
    }

   65% {
        transform: translateY(20%);
    }

    100% {
        transform: translateY(-10%);
    }
`;

const close = keyframes`
    0%{
        transform: translateY(-70%);
        transform : scale(0);
    }
    100% {
        transform: translateY(-90%);
        transform : scale(0);
    }
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 0 auto;

  animation: ${({ isActive }) =>
    isActive
      ? css`
          ${test} .7s cubic-bezier(.48,0,.22,1.02) forwards
        `
      : css`
          ${close} 1s ease-in-out forwards
        `};

  h1,
  h2,
  h3,
  h4 {
    color: white;
  }
`;

export const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  background-color: #335145;
  border-radius: 25px 25px 50px 50px;
  box-shadow: 0 10px 32px 4px rgba(0, 0, 0, 0.2),
    0 2px 6px 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  /* padding: 4%; */
  padding-top: 8%;
`;

export const FormInputInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6% 0 6% 0;
  width: 100%;
`;
