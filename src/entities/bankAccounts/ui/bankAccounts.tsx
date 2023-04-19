import FormCheckBox from "@/shared/ui/checkbox";
import FormTextField from "@/shared/ui/textfield";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import React, { FC } from "react";
import {
  checkBik,
  checkPaymetAccount,
  checkcorr_account_number,
} from "./../model";

export const bank_accounts: FC<{
  control: any;
  register: any;
  errors: any;
}> = ({ control, register, errors }) => {
  return (
    <Stack gap={1.5}>
      <FormTextField
        register={register}
        control={control}
        errors={errors}
        name="name"
        placeholder="Название счета"
      />
      <FormTextField
        register={register}
        control={control}
        errors={errors}
        name="account_number"
        placeholder="Номер счета"
        validators={checkPaymetAccount}
      />
      <FormTextField
        register={register}
        control={control}
        errors={errors}
        name="bik"
        placeholder="БИК счета"
        validators={checkBik}
      />
      <FormTextField
        register={register}
        control={control}
        errors={errors}
        name="corr_account_number"
        placeholder="Корр. номер счета"
        validators={checkcorr_account_number}
      />
      <FormCheckBox
        register={register}
        control={control}
        name="is_default"
        placeholder="Дефолтный счет"
      />
      <Divider />
    </Stack>
  );
};
