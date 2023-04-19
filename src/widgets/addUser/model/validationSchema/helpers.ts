import * as yup from "yup";

export const isINNLegalEntity = (value: number ): boolean => {
  const valueToString = value ? value.toString() : "";
  const getN = (index: number): number => parseInt(valueToString[index]);
  if (valueToString.length === 10) {
    const dgt10 =
      ((2 * getN(0) +
        4 * getN(1) +
        10 * getN(2) +
        3 * getN(3) +
        5 * getN(4) +
        9 * getN(5) +
        4 * getN(6) +
        6 * getN(7) +
        8 * getN(8)) %
        11) %
      10;
    return getN(9) === dgt10;
  }
  return false;
};

export const isKPP = (value: number): boolean => {
  const valueToString = value ? value.toString() : "";
  if (valueToString.length !== 9) return false;
  if (!valueToString.match(/\d{4}[\dA-Z][\dA-Z]\d{3}/)) return false;
  return true;
};

export const checkBIK = (value: string): boolean => {
  if (!/^\d{9}$/.test(value)) return false;
  const thirdPart = value.slice(-3);
  if (+thirdPart === 0 || +thirdPart === 1 || +thirdPart === 2) return true;
  return +thirdPart >= 50 && +thirdPart < 1000;
};

export const checkPaymetAccount = (value: string, bik: string): boolean => {
  const valueToString = value ? value.toString() : "";
  if (checkBIK(bik)) {
    if (!/[^0-9]/.test(valueToString) && valueToString.length === 20) {
      const bikRs = bik.toString().slice(-3) + valueToString;
      let checkSum = 0;
      const coefficients = [
        7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1,
      ];
      for (var i in coefficients) {
        checkSum += coefficients[i] * (Number(bikRs[i]) % 10);
      }
      return checkSum % 10 === 0;
    }
  }
  return false;
};

export const checkcorr_account_number = (
  value: string,
  bik: string
): boolean => {
  const valueToString = value ? value.toString() : "";
  if (checkBIK(bik)) {
    if (!/[^0-9]/.test(valueToString) && valueToString.length === 20) {
      const bikKs = "0" + bik.slice(4, 6) + valueToString;
      let checkSum = 0;
      const coefficients = [
        7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1,
      ];
      for (let i in coefficients) {
        checkSum += coefficients[i] * (Number(bikKs[i]) % 10);
      }
      return checkSum % 10 === 0;
    }
  }
  return false;
};

export function checkPayment(this: yup.StringSchema, ref: any, msg: string) {
  //@ts-ignore

  return this.test({
    name: "checkPaymentMethod",
    exclusive: false,
    message: msg || "Введите корректный номер р/с",
    params: { reference: ref.path },
    test: function (value: string) {
      return checkPaymetAccount(value, this.resolve(ref));
    },
  });
}

export function checkCorrespondent(
  this: yup.StringSchema,
  ref: any,
  msg: string
) {
  //@ts-ignore

  return this.test({
    name: "correspAccountNum",
    exclusive: false,
    message: msg || "Введите корректный номер к/с",
    params: { reference: ref.path },
    test: function (value: string) {
      return checkcorr_account_number(value, this.resolve(ref));
    },
  });
}
