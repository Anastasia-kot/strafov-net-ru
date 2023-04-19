import FormTextField from "@/shared/ui/textfield";
import { IconButton } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React, { FC } from "react";
import ClearIcon from "@mui/icons-material/Clear";

export const MetadataRow: FC<{ control: any; register: any; id: string }> = ({
  control,
  id,
  register,
}) => {
  return (
    <TableRow
      key={id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="left">
        <FormTextField
          register={register}
          control={control}
          name="invoicesEmail"
          placeholder="Ключ"
        />
      </TableCell>
      <TableCell align="left">
        <FormTextField
          register={register}
          control={control}
          name="invoicesEmail"
          placeholder="Значение"
        />
      </TableCell>
      <TableCell align="left">
        <IconButton>
          <ClearIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
