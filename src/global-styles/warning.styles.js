import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: 14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const Warning = styled.div`
  border-color: red;
  color: red;
  font-size: 0.8rem;
`;
