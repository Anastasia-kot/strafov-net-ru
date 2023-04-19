import React from "react";
import CardActionArea from "@mui/material/CardActionArea";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Link from "next/link";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { dateParser, daysParser } from "../utils";
import { IUser } from "@/entities/user/model";

const UserRow = (user: IUser) => {
  const { id, name, email, deferral_days, created_at, updated_at } = user;
  const [open, setOpen] = React.useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
 
  const handleClick = (id: string) => {
    navigator.clipboard.writeText(id);
    setOpen(true);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert severity="info" onClose={handleClose} sx={{ width: "100%" }}>
          Id is copied to the clipboard
        </Alert>
      </Snackbar>
      <TableRow
        key={id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row" align="right">
          <Link
            style={{
              textDecoration: "none",
              color: "initial",
              display: "flex",
              justifyContent: "flex-end",
            }}
            href={`/users/${id}`}
          >
            <CardActionArea
              sx={{
                padding: "5px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "fit-content",
              }}
            >
              {name}
            </CardActionArea>
          </Link>
        </TableCell>
        <TableCell component="th" scope="row" align="right">
          {id}{" "}
          <IconButton onClick={() => handleClick(id)}>
            <ContentCopyIcon />
          </IconButton>
        </TableCell>
        <TableCell align="right">{email && email}</TableCell>
        <TableCell align="right">
          {(!!deferral_days || (String(deferral_days) === '0')) &&
            daysParser(deferral_days)}
        </TableCell>
        <TableCell align="right">
          {created_at && dateParser(created_at)}
        </TableCell>
        <TableCell align="right">
          {updated_at && dateParser(updated_at)}
        </TableCell>
      </TableRow>
    </>
  );
};

export default UserRow;
