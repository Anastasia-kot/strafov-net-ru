import React, { Dispatch, FC, SetStateAction } from "react";
import Accordion from "@mui/material/Accordion";
import Summary from "@mui/material/AccordionSummary";
import Details from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paper from "@mui/material/Paper";
import { FieldValues, useForm } from "react-hook-form";
import Button from "@mui/material/Button";

import ClientDetails from "@/entities/clientDetails";
import CompanyDetails from "@/entities/companyDetails";
import AddBankAccounts from "@/features/bankAccounts";
import AddEmails from "@/features/addEmails";
import AddMetadata from "@/features/addMetadata";
import { IFormUser } from "@/entities/user/model";
import { observer } from "mobx-react-lite";
import userStore from "@/entities/user/user.store";
import Dialog from "@mui/material/Dialog";

type Props = { setOpened: Dispatch<SetStateAction<boolean>>; opened: boolean };

const AddUser = ({ opened, setOpened }: Props) => {
  const defaultValues = {
    name: "",
    email: "",
    // deferral_days: undefined,
    // limit: 0,
    org: {
      name: "",
      // inn: 0,
      // kpp: 0,
      addr: "",
      bank_accounts: [{ is_default: true }],
    },
    invoice_emails: [{}],
    metaData: [],
  };

  const {
    control,
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues,
    shouldFocusError: true,
    mode: "onTouched",
  });
   const onSubmit = (data: FieldValues) => {
    console.log("onSubmit with data: ", data);

    
    //@ts-ignore
    const user: IFormUser = {...data};
    user.invoice_emails = data.invoice_emails.map((i: {email: string}) => i.email);
    user.metadata = Object.fromEntries(
      data.metaData.map(({ key, value }: { key: string; value: string }) => [
        key,
        value,
      ])
    );
    userStore.addUser(user);
  };

  const MyAccordion: FC<{ title: string; Component: any }> = ({
    title,
    Component,
  }) => (
    <Accordion>
      <Summary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </Summary>
      <Details>
        <Component
          control={control}
          register={register}
          setValue={setValue}
          getValues={getValues}
        />
      </Details>
    </Accordion>
  );
  return (
    <Dialog onClose={() => setOpened(false)} open={opened}>
      <Paper sx={{ p: 4 }} elevation={10}>
        <Typography variant="h5" m={1}>
          Создание карточки клиента
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <MyAccordion title={"Детали клиента"} Component={ClientDetails} />
          <MyAccordion
            title={"Детали организации"}
            Component={CompanyDetails}
          />
          <MyAccordion title={"Банковские счета"} Component={AddBankAccounts} />
          <MyAccordion title={"Email для счетов"} Component={AddEmails} />
          <MyAccordion title={"Meta информация"} Component={AddMetadata} />

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
            disabled={!!(Object.keys(errors).length > 1)}
          >
            Создать
          </Button>
        </form>
      </Paper>
    </Dialog>
  );
};

export default observer(AddUser);
