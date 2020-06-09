import React, { Fragment, useContext } from "react";
import DispatchContext from "../../../context/DispatchContext";

import {
  Tabs,
  TabsBlock,
  TabsBlock__wrapper,
  TabsInput,
  CheckMark,
  TabsDetails,
} from "./Tabs.styles";

//Global styles

const Tabs = ({ value, text, name, link, ...props }) => {
  const appDispatch = useContext(DispatchContext);

  return (
    <Fragment>
      <Tabs className="">
        <TabsBlock__wrapper>
          <TabsBlock />
        </TabsBlock__wrapper>
        <TabsBlock__wrapper>
          <TabsDetails>
            <h3>{value} </h3>
            <small>{text}</small>
            <a href="">
              {" "}
              <small>{link}</small>{" "}
            </a>
          </TabsDetails>
        </TabsBlock__wrapper>
      </Tabs>
    </Fragment>
  );
};

export default Tabs;
