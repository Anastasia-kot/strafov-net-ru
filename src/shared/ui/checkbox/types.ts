export type IProps =  {
  value: boolean
  onChange: any
  control: any;
  register: any;
  name: string;
  placeholder: string;
  index:number;
  size?: "small" | "medium";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
} & any
