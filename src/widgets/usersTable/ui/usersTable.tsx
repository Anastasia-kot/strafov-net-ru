import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import UserRow from "@/entities/userTableRow";
import { Dispatch, SetStateAction, useEffect } from "react";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import FolderOffOutlinedIcon from "@mui/icons-material/FolderOffOutlined";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
 import { FieldValues, useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";
import userStore from "@/entities/user/user.store";
  
const UsersTable = ({ setOpened }: { setOpened: Dispatch<SetStateAction<boolean>> }) => {
  const { users, setUsers } = userStore;

  useEffect(() => {
    setUsers();
  }, []);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => {
    setUsers(data.searchWord);
  };

  return (
    <Paper sx={{ padding: "20px" }}>
      <TableContainer>
        <Stack direction="row" alignItems="center" m={2} gap={2}>
          <Typography variant="h4" m={3} sx={{ flexGrow: 1 }}>
            Клиенты
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="row">
              <TextField
                id="input-with-sx"
                label="Поиск..."
                variant="standard"
                {...register("searchWord")}
              />
              <IconButton
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
                type="submit"
              >
                <SearchIcon />
              </IconButton>
            </Stack>
          </form>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpened(true)}
          >
            Добавить клиента
          </Button>
        </Stack>

        <Table
          sx={{ minWidth: "650px" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="right">
                <b>Имя</b>
              </TableCell>
              <TableCell align="right">
                <b>Id</b>
              </TableCell>
              <TableCell align="right">
                <b>Почта</b>
              </TableCell>
              <TableCell align="right">
                <b>Отсрочка оплаты</b>
              </TableCell>
              <TableCell align="right">
                <b>Создан</b>
              </TableCell>
              <TableCell align="right">
                <b>Изменен</b>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users?.map((user) => (
              <UserRow {...user} key={user.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {users.length == 0 && <Stack alignItems={'center'} sx={{p:4}}>
         <FolderOffOutlinedIcon />
         <Typography>No data</Typography>
       </Stack>}
    </Paper>
  );
};

export default observer(UsersTable);
