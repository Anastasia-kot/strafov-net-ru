export type IUser = {
  id: string;
  name: string;
  email: string;
  deferral_days: number;
  org: {
    name: string;
    inn: string;
    kpp: string;
    addr: string;
    bank_accounts: any[];
  };
  balance: any;
  metadata: any;
  created_at: string; //ISO Date
  updated_at: string; //ISO Date

  status: string;
  invoice_prefix: string;
  invoice_emails: string[];
};

export type IFormUser = Pick<
  IUser,
  "name" | "email" | "deferral_days" | "org" | "metadata" | "invoice_emails"
>;
