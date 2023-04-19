import { checkEmail, checkInteger } from "@/features/addEmails/model";
import FormTextField from "@/shared/ui/textfield";
import { ErrorMessage } from "@hookform/error-message";
import Stack from "@mui/material/Stack";
import React, { FC } from "react";

export const ClientDetails: FC<{
  control: any;
  register: any;
  errors: any;
}> = ({ control, register, errors }) => {
  return (
    <Stack gap={1.5}>
      <FormTextField
        errors={errors}
        control={control}
        register={register}
        name="name"
        placeholder="Имя"
        type="text"
      />
      <FormTextField
        control={control}
        errors={errors}
        name="email"
        placeholder="Email"
        register={register}
        type="email"
        validators={checkEmail}
      />

      <FormTextField
        errors={errors}
        control={control}
        register={register}
        name="deferral_days"
        placeholder="Дни отсрочки"
        validators={checkInteger}
      />
      <FormTextField
        errors={errors}
        control={control}
        register={register}
        name="limit"
        placeholder="Кредитный лимит"
        validators={checkInteger}
      />
    </Stack>
  );
};
