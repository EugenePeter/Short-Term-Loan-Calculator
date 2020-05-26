import styled from "styled-components";

export const FormInner = styled.div`
  transform: ${({ clicked }) => (clicked ? "translateY(-100%)" : "null")};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  // padding: 2rem;
  border-radius: 2rem;
  width: 100%;
  margin: 0 auto;
  // box-shadow: 15px 20px 70px -10px;
  // background-color: white;
  box-sizing: border-box;
`;

// .form-wrapper {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 80%;
//     background-color: #fff!important;
//     border-radius: 2rem;
//     box-shadow: 0 10px 32px 4px rgba(0, 0, 0, 0.2), 0 2px 6px 1px rgba(0, 0, 0, 0.1);
//     z-index: 1000;
//     padding: 4%;
// }

// .form-wrapper__inner {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     padding: 6% 0 6% 0;
//     width: 100%;
//     // background-color: yellow;
// }
