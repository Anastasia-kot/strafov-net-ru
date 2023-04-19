import { TextField } from "@mui/material";
import React from "react";
import { FC, HTMLInputTypeAttribute } from "react";
import { Controller } from "react-hook-form";

type Props = {
  name: string;
  control: any;
  register: any;
  validators?: any;
  errors?: any;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  rows?: number;
  maxRows?: number;
  multiline?: boolean;
} & { type?: HTMLInputTypeAttribute };
 

const FormTextField: FC<Props> = (props) => {
  const {
    name,
    control,
    register,
    errors,
    validators,
     placeholder,
    disabled = false,
 
    rows,
    maxRows,
    multiline,
    type,
  } = props;
 
  return (
  
    
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => {
          return (
            <>
              <TextField
                label={placeholder}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                maxRows={maxRows}
                multiline
                disabled={disabled || formState.isSubmitting}
                autoComplete="off"
                {...register(name)}
                // type={type}
 
                helperText={error?.message}
                error={!!error}
               />
            </>
          );
        }}
        rules={{ required: "Обязательное поле", ...validators }}
      />
   );
};

export default FormTextField;
