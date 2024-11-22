import React from "react";
import { TextField } from "@mui/material";
import InputMask from "react-input-mask";

const TextFieldComponent = ({
  variant = "outlined",
  className = "",
  mask,
  ...props
}) => {
  return (
    <InputMask mask={mask}>
      {(inputProps) => (
        <TextField
          className={`general-textfield ${className}`}
          variant={variant}
          {...inputProps}
          {...props}
        />
      )}
    </InputMask>
  );
};

export default TextFieldComponent;
