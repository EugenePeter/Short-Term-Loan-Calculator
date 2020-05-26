import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, value, ...props }) => {
  const test = value.length;

  console.log("the value is " + value);

  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...props} />

      {label ? (
        <FormInputLabel className={test ? "shrink" : ""}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
