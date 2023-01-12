import React from "react";
import { alpha, Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";

type IProps = {
  name: string;
  control: any;
  label: string;
};

export const CheckBoxInput: React.FC<IProps> = ({ name, control, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormControlLabel
          control={<Checkbox onChange={onChange} checked={value} />}
          label={label}
          sx={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "20px",

            /* identical to box height, or 150% */
            letterSpacing: "0.25px",

            /* Text/Primary - Error */
            color: alpha("#000", 0.87),
          }}
        />
      )}
    />
  );
};
