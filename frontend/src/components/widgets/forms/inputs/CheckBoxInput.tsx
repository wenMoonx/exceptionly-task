import React from "react";
import { alpha, Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";

type IProps = {
  name: string;
  control: any;
  label: string;
};

const CheckBoxInput: React.FC<IProps> = ({ name, control, label }) => {
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
            letterSpacing: "0.25px",
            color: alpha("#000", 0.87),
          }}
        />
      )}
    />
  );
};

export default CheckBoxInput;
