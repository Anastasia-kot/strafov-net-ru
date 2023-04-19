import { isINNLegalEntity, isKPP } from "@/features/addEmails/model";
import FormTextField from "@/shared/ui/textfield";
import Stack from "@mui/material/Stack";
import React, { FC } from "react";

export const CompanyDetails: FC<{
  control: any;
  register: any;
  errors: any;
}> = ({ control, register, errors }) => {
  return (
    <Stack gap={1.5}>
      <FormTextField
        control={control}
        errors={errors}
        name="org.name"
        placeholder="Название организации"
        register={register}
      />
      <FormTextField
        control={control}
        errors={errors}
        name="org.inn"
        placeholder="ИНН организации"
        register={register}
        validators={isINNLegalEntity}
      />
      <FormTextField
        control={control}
        errors={errors}
        name="org.kpp"
        placeholder="КПП организации"
        register={register}
        validators={isKPP}
      />
      <FormTextField
        control={control}
        errors={errors}
        name="org.addr"
        placeholder="Юридический адрес"
        register={register}
      />
    </Stack>
  );
};
