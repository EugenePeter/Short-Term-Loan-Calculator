import React, { Fragment } from "react";
// import DispatchContext from "../../../context/DispatchContext";

import {
  Radio,
  RadioBlock,
  RadioBlockWrapper,
  RadioInput,
  CheckMark,
} from "./RadioInputBlock.styles";

//Global styles

const RadioBlockComponent = ({ value, name }) => {
  // const appDispatch = useContext(DispatchContext);
  // const click = props.clicked;

  function changeColor(e) {}

  return (
    <Fragment>
      <Radio onClick={changeColor} className="">
        <RadioBlockWrapper>{value}</RadioBlockWrapper>

        <RadioBlockWrapper>
          <RadioBlock>
            <RadioInput type="radio" name={name} value={value} click />
            <CheckMark />
          </RadioBlock>
        </RadioBlockWrapper>
      </Radio>
    </Fragment>
  );
};

export default RadioBlockComponent;
