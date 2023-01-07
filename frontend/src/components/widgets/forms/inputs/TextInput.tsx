import { alpha, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

import { InputProps } from "./inputs.dto";

const TextInput: React.FC<InputProps> = ({
  name,
  control,
  label,
  type = "text",
  required = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          helperText={error ? error.message : null}
          // required={!!rules["required"]}
          type={type}
          required={required}
          error={!!error}
          fullWidth
          label={label}
          variant="standard"
          sx={{
            marginBottom: "10px",

            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "24px",

            /* identical to box height, or 150% */
            letterSpacing: "0.15px",

            /* Text/Primary - Error */
            color: alpha("#000", 0.6),
          }}
        />
      )}
    />
  );
};

export default TextInput;
