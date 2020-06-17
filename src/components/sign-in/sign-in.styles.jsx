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
