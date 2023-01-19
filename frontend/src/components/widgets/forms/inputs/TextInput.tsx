import React from 'react';
import { alpha, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import { InputProps } from './inputs.dto';

const TextInput: React.FC<InputProps> = ({ name, control, label, type = 'text', required = false }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          helperText={error ? error.message : null}
          type={type}
          required={required}
          error={!!error}
          fullWidth
          label={label}
          variant="standard"
          sx={{
            marginBottom: '10px',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.15px',
            color: alpha('#000', 0.6),
          }}
        />
      )}
    />
  );
};

export default TextInput;
