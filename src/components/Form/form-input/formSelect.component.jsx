import React, { Fragment } from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
  FormSelect,
} from "./form-input.styles";

const FormSelect = ({ handleChange, label, value, ...props }) => {
  const test = value.length;

  return (
    <Fragment>
      <FormSelect onChange={handleChange} {...props} />

      {label ? (
        <FormInputLabel className={test ? "shrink" : ""}>
          {label}
        </FormInputLabel>
      ) : null}
    </Fragment>
  );
};

export default FormSelect;
