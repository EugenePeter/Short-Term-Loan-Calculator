// import React, { Fragment, useContext } from "react";
// import DispatchContext from "../../../context/DispatchContext";

// import {
//   TabsInput,
//   Label,
//   TabsInputWrapper,
//   TabsInputContainer,
// } from "./Tabss.styles";

// //Global styles
// import { GroupContainer } from "../form__global-styles";

// import { RadioInput } from "../form-input/form-input.styles";

// const Tabss = (props) => {
//   const appDispatch = useContext(DispatchContext);

//   const label = props.label;
//   const value = props.value;
//   return (
//     <Fragment>
//       <TabsInputWrapper>
//         <TabsInput
//           type="radio"
//           value={value}
//           onClick={(e) =>
//             appDispatch({ type: "jobType", value: e.target.value })
//           }
//         />
//         <Label>{label}</Label>
//       </TabsInputWrapper>
//     </Fragment>
//   );
// };

// export default Tabss;
