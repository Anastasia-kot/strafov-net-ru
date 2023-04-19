import FormCheckBox from "@/shared/ui/checkbox";
import FormTextField from "@/shared/ui/textfield";
import Stack from "@mui/material/Stack";
import React, { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import {   useFieldArray } from "react-hook-form";
import Divider from "@mui/material/Divider";
import {
  checkBik,
  checkcorr_account_number,
  checkPaymetAccount,
} from "@/entities/bankAccounts/model";
import DeleteIcon from "@mui/icons-material/DeleteForeverOutlined";

type Props = {
  control: any;
  register: any;
  errors: any;
  setValue: any;
  getValues: any;
};
export const AddBankAccounts: FC<Props> = ({
  control,
  register,
  errors,
  setValue,
  getValues,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "org.bank_accounts",
  });

  function handleChange(index: number) {
    fields.forEach((item, i) => {
      if (index !== i) {
        setValue(`org.bank_accounts.${i}.is_default`, false);
      } else {
        setValue(`org.bank_accounts.${i}.is_default`, true);
      }
    });
  }

  function handleRemove(index: number) {
    if (getValues(`org.bank_accounts.${index}.is_default`)) {
      handleChange(0);
    }
    remove(index);
  }

  return (
    <Stack gap={1.5}>
      {fields.map((field, index) => (
        <Stack key={field.id} gap={2}>
          <Stack direction={"row"} gap={2} alignItems={"flex-start"}>
            <Stack gap={1.5}>
              <FormTextField
                register={register}
                control={control}
                errors={errors}
                name={`org.bank_accounts.${index}.name`}
                placeholder="Название счета"
               />
              <FormTextField
                register={register}
                control={control}
                errors={errors}
                name={`org.bank_accounts.${index}.account_number`}
                placeholder="Номер счета"
                validators={checkPaymetAccount}
              />
              <FormTextField
                register={register}
                control={control}
                errors={errors}
                name={`org.bank_accounts.${index}.bik`}
                placeholder="БИК счета"
                validators={checkBik}
               />
              <FormTextField
                register={register}
                control={control}
                errors={errors}
                name={`org.bank_accounts.${index}.corr_account_number`}
                placeholder="Корр. номер счета"
                validators={checkcorr_account_number}
              />
              <FormCheckBox
                register={register}
                control={control}
                value={false}
                name={`org.bank_accounts.${index}.is_default`}
                placeholder="Дефолтный счет"
                index={index}
                handleChange={handleChange}
              />
            </Stack>
            {index !== 0 && (
              <Button
                startIcon={<DeleteIcon />}
                variant="outlined"
                onClick={() => handleRemove(index)}
                color="error"
              >
                Удалить счет
              </Button>
            )}
          </Stack>

          <Divider sx={{ flexGrow: 1 }} />
        </Stack>
      ))}
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() => append({ is_default: false })}
      >
        Добавить еще один счет
      </Button>
    </Stack>
  );
};
