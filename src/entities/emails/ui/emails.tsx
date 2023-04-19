import FormTextField from '@/shared/ui/textfield';
import React, { FC } from 'react'

export const Emails: FC<{ control: any; register: any; errors: any }> = ({
  control,
  register,
  errors,
}) => {
  return (
    <FormTextField
      errors={errors}
      control={control}
      register={register}
      name="invoicesEmail"
      placeholder="Email для счетов"
    />
  );
};
