import React, { Fragment, useContext } from "react";
import { useImmerReducer, useImmer } from "use-immer";
import DispatchContext from "../../../context/DispatchContext";

import {
  Radio,
  RadioBlock,
  RadioBlock__wrapper,
  RadioInput,
  CheckMark,
  Img,
} from "./radio-button-styles";

//Global styles

import { ReactComponent as Emergencies } from "../../../assets/icons/emergencies-cashified.svg";

import { ReactComponent as HomeImprovements } from "../../../assets/icons/home-improvements-cashified.svg";

import { ReactComponent as Leisure } from "../../../assets/icons/leisure-cashified.svg";

const RadioIcons = (props) => {
  // const appDispatch = useContext(DispatchContext);
  // const click = props.clicked;

  const [state, setState] = useImmer({
    icons: {
      url: [
        "../../../assets/icons/emergencies-cashified.svg",
        "../../../assets/icons/emergencies-cashified.svg",
        "../../../assets/icons/home-improvements-cashified.svg",
        "../../../assets/icons/leisure-cashified.svg",
        "../../../assets/icons/life-events-cashified.svg",
        "../../../assets/icons/purchases-cashified.svg",
        "../../../assets/icons/travel-cashified.svg",
        "../../../assets/icons/utilities-and-bills-cashified.svg",
        "../../../assets/icons/vehicle-expenses-cashified.svg",
        ,
      ],
    },
  });

  const icon = props.value;
  // const test = props.test

  switch (props.value) {
    case icon:
      return (
        <Fragment>
          <Emergencies />
          <HomeImprovements />
          <HomeImprovements />
          <HomeImprovements />
          <Leisure />
        </Fragment>
      );
  }
};

export default RadioIcons;
