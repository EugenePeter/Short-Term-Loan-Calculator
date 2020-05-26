import React, { Fragment, useContext } from "react";
import DispatchContext from "../../../context/DispatchContext";

import {
  Radio,
  RadioBlock,
  RadioBlock__wrapper,
  RadioInput,
  CheckMark,
} from "./RadioInputBlock.styles";

//Global styles

const RadioBlockComponent = ({ value, name, ...props }) => {
  // const appDispatch = useContext(DispatchContext);
  // const click = props.clicked;

  function changeColor(e) {}

  return (
    <Fragment>
      <Radio onClick={changeColor} className="">
        <RadioBlock__wrapper>{value}</RadioBlock__wrapper>

        <RadioBlock__wrapper>
          <RadioBlock>
            <RadioInput type="radio" name={name} value={value} click />
            <CheckMark></CheckMark>
          </RadioBlock>
        </RadioBlock__wrapper>
      </Radio>
    </Fragment>
  );
};

export default RadioBlockComponent;
