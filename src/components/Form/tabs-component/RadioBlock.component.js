import React, { Fragment, useContext } from "react";
import DispatchContext from "../../../context/DispatchContext";

import {
  Radio,
  RadioBlock,
  RadioBlock__wrapper,
  RadioInput,
  CheckMark,
} from "./RadioInputBlock.styles";

import RadioButtonRaw from "./radio-button--raw";

//Global styles
import { GroupContainer } from "../form__global-styles";

const RadioBlockComponent = ({ value }) => {
  const appDispatch = useContext(DispatchContext);

  function changeColor(e) {}

  return (
    <Fragment>
      <Radio onClick={changeColor} className="">
        <RadioBlock__wrapper>{value}</RadioBlock__wrapper>

        <RadioBlock__wrapper>
          <RadioBlock>
            <RadioInput
              type="radio"
              name="radio"
              value={value}
              onClick={(e) =>
                appDispatch({ type: "jobType", value: e.target.value })
              }
            />
            <CheckMark></CheckMark>
          </RadioBlock>
        </RadioBlock__wrapper>
      </Radio>
    </Fragment>
  );
};

export default RadioBlockComponent;
