import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";


import { Box, Checkbox, Typography } from "@mui/material";

import { IProps } from "./types";
import { IOSSwitch } from "./style";

const FormCheckBox: React.FC<IProps> = (props) => {
  const { name, control, placeholder, size, index, watch, handleChange } =
    props;

  // useEffect(() => {
  //   if (watch(name)) {
  //     handleChange(index);
  //   }
  // }, [watch(name)]);


  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {

          return (
            <FormControlLabel
              control={
                <IOSSwitch
                  sx={{ m: 1 }}
                  checked={value}
                  onChange={()=>handleChange(index)}
                  disabled={!!value}
                />
              }
              label={placeholder}
            />
          );
        }
      }
        // render={({ field: {  value } }) => (
  


    />



  );
};

export default FormCheckBox;
