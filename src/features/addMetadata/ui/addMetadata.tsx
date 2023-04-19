
import Stack from '@mui/material/Stack';
import React, { FC } from 'react'
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import MetadataRow from '@/entities/metadata';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import FolderOffOutlinedIcon from "@mui/icons-material/FolderOffOutlined";
import Typography from '@mui/material/Typography';
import { useFieldArray } from 'react-hook-form';
import FormTextField from '@/shared/ui/textfield';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';



 export const AddMetadata: FC<{ control: any; register: any }> = ({
   control,
   register,
 }) => {
 
  const { fields, append, remove } = useFieldArray({
    control,
    name: "metaData",
  });


   return (
     <Stack gap={1.5}>
       <TableContainer component={Paper}>
         <Table sx={{ minWidth: 150 }} size="small" aria-label="a dense table">
           <TableHead>
             <TableRow>
               <TableCell align="right">
                 <b>Ключ</b>
               </TableCell>
               <TableCell align="right">
                 <b>Значение</b>
               </TableCell>
               <TableCell align="right"> </TableCell>
             </TableRow>
           </TableHead>

           <TableBody>
             {fields.length > 0 && (
               fields.map((item, index) => (
                 <TableRow
                   key={item.id}
                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                 >
                   <TableCell align="left">
                     <FormTextField
                       control={control}
                       register={register}
                       name={`metaData.${index}.key`}
                       placeholder="Ключ"
                     />
                   </TableCell>
                   <TableCell align="left">
                     <FormTextField
                       control={control}
                       register={register}
                       name={`metaData.${index}.value`}
                       placeholder="Значение"
                     />
                   </TableCell>
                   <TableCell align="left">
                     <IconButton onClick={() => remove(index)} color="error">
                       <ClearIcon />
                     </IconButton>
                   </TableCell>
                 </TableRow>
               ))
             ) }
           </TableBody>
         </Table>
       </TableContainer>
     {fields.length === 0 &&
       <Box sx={{width: 'fit-content', alignSelf:'center'}}>
         <FolderOffOutlinedIcon />
         <Typography>No data</Typography>
       </Box>
 }
       <Button
         startIcon={<AddIcon />}
         onClick={() => {
           append({});
         }}
         variant="outlined"
       >
         Добавить еще одну пару &quot;ключ-значение&quot;
       </Button>
     </Stack>
   );
 };
