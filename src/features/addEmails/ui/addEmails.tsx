import FormTextField from "@/shared/ui/textfield";
import Stack from "@mui/material/Stack";
import React, { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useFieldArray } from "react-hook-form";

import DeleteIcon from "@mui/icons-material/DeleteForeverOutlined";
import { checkEmail } from "../model";

export const AddEmails: FC<{ control: any; register: any; errors?: any }> = ({
  control,
  register,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "invoice_emails",
  });

  return (
    <Stack gap={1.5}>
      {fields.map((item, index) => (
        <Stack key={item.id} gap={2}>
          <Stack direction={"row"} gap={2} alignItems={"flex-start"}>
            <FormTextField
              control={control}
              register={register}
              name={`invoice_emails.${index}.email`}
              placeholder="Email для счетов"
              validators={checkEmail}
            />
            {index !== 0 && (
              <Button
                startIcon={<DeleteIcon />}
                variant="outlined"
                onClick={() => remove(index)}
                color="error"
              >
                Удалить email
              </Button>
            )}
          </Stack>
          <Divider />
        </Stack>
      ))}

      <Button
        startIcon={<AddIcon />}
        onClick={() => {
          append({});
        }}
        variant="outlined"
      >
        Добавить еще один email
      </Button>
    </Stack>
  );
};
