import React, { Fragment, useContext } from "react";
import DispatchContext from "../../../context/DispatchContext";

import {
  TabInput,
  Label,
  TabInputWrapper,
  TabInputContainer,
} from "./Tabs.styles";

//Global styles
import { GroupContainer } from "../form__global-styles";

import { RadioInput } from "../form-input/form-input.styles";

const Tabs = (props) => {
  const appDispatch = useContext(DispatchContext);

  const label = props.label;
  const value = props.value;
  return (
    <Fragment>
      <TabInputWrapper>
        <TabInput
          type="radio"
          value={value}
          onClick={(e) =>
            appDispatch({ type: "jobType", value: e.target.value })
          }
        />
        <Label>{label}</Label>
      </TabInputWrapper>
    </Fragment>
  );
};

export default Tabs;
