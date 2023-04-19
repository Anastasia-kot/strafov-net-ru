import * as yup from "yup";
import {
  checkBIK,
  checkcorr_account_number,
  checkPaymetAccount,
  isINNLegalEntity,
  isKPP,
  checkPayment,
  checkCorrespondent,
} from "./helpers";

declare module "yup" {
  interface StringSchema {
    checkPaymentMethod(ref: any): StringSchema;
    checkCorrespondentMethod(ref: any): StringSchema;
  }
}
yup.addMethod<yup.StringSchema>(yup.string, "checkPaymentMethod", checkPayment);
yup.addMethod<yup.StringSchema>(
  yup.string,
  "checkCorrespondentMethod",
  checkCorrespondent
);
const schema = yup.object({
  // name: yup.string().required("Поле обязательно для заполнения"),
  // email: yup
  //   .string()
  //   .required("Поле обязательно для заполнения")
  //   .email("Введите валидный email"),
  // deferral_days: yup
  //   .number()
  //   .required("Поле обязательно для заполнения")
  //   .min(0, "Больше или равно нулю")
  //   .integer("Целое число"),
  // limit: yup
  //   .number()
  //   .required("Поле обязательно для заполнения")
  //   .min(0, "Больше или равно нулю")
  //   .integer("Целое число"),

  // name: yup.string().required("Поле обязательно для заполнения"),
  // inn: yup
  //   .number()
  //   .required("Поле обязательно для заполнения")
  //   .test("innValid", "Неверный ИНН", (value) => isINNLegalEntity(value)),
  // kpp: yup
  //   .number()
  //   .required("Поле обязательно для заполнения")
  //   .test("kppValid", "Неверный КПП", (value) => isKPP(value)),
  // addr: yup.string().required("Поле обязательно для заполнения"),

  name: yup.string().required("Поле обязательно для заполнения"),
  account_number: yup
    .string()
    .checkPaymentMethod(yup.ref("bik")) // Метод, который мы создадим и предадим данный из БИК
    .required(),

  bik: yup

    .string()
    .required()
    .test("bikwe", "Неверный БИК", (value) => checkBIK(value)), // Валидация БИК

  corr_account_number: yup
    .string()
    .checkCorrespondentMethod(yup.ref("bik")) // Метод, который мы создадим и предадим данный из БИК
    .required(),
});

export default schema;
