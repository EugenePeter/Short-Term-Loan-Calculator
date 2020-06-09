import React, { Fragment, useContext } from "react";
import DispatchContext from "../../../context/DispatchContext";

import {
  CheckBox,
  CheckBoxBlock,
  CheckBoxBlock__wrapper,
  CheckBoxInput,
  CheckMark,
  CheckBoxDetails,
} from "./checkbox.styles";

//Global styles

const CheckBoxBlockComponent = ({ value, text, name, link, ...props }) => {
  const appDispatch = useContext(DispatchContext);

  return (
    <Fragment>
      <CheckBox className="">
        <CheckBoxBlock__wrapper>
          <CheckBoxBlock>
            <CheckBoxInput
              type="CheckBox"
              name={name}
              clicked
              value={value}
              onChange={(e) =>
                appDispatch({
                  type: "disclosure",
                  value: e.target.value,
                })
              }
            />
            <CheckMark />
          </CheckBoxBlock>
        </CheckBoxBlock__wrapper>
        <CheckBoxBlock__wrapper>
          <CheckBoxDetails>
            <h3>{value} </h3>
            <small>{text}</small>
            <a href="">
              {" "}
              <small>{link}</small>{" "}
            </a>
          </CheckBoxDetails>
        </CheckBoxBlock__wrapper>
      </CheckBox>
    </Fragment>
  );
};

export default CheckBoxBlockComponent;
