export const checkBik = {
  pattern: {
    value: /[0-9]{9}/,
    message: "БИК должен быть из 9 цифр",
  },
  validate: {
    isCorrect: (value: string) => {
      const thirdPart = value.slice(-3);
      if (+thirdPart === 0 || +thirdPart === 1 || +thirdPart === 2) return true;
      if (+thirdPart >= 50 && +thirdPart < 1000) {
        return true;
      } else {
        return "Введите корректный номер БИК";
      }
    },
  },
};

export const checkPaymetAccount = {
  pattern: {
    value: /[0-9]{20}/,
    message: "Счет должен быть из 20 цифр",
  },
  //   validate: {
  //     isCorrect: (value: string, values: any): boolean => {
  //       const valueToString = value ? value.toString() : "";
  //       if (checkBIK(bik)) {
  //         if (!/[^0-9]/.test(valueToString) && valueToString.length === 20) {
  //           const bikRs = bik.toString().slice(-3) + valueToString;
  //           let checkSum = 0;
  //           const coefficients = [
  //             7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1,
  //           ];
  //           for (let i in coefficients) {
  //             checkSum += coefficients[i] * (Number(bikRs[i]) % 10);
  //           }
  //           return checkSum % 10 === 0;
  //         }
  //       }
  //       return false;
  //     },
  //   },
};

export const checkcorr_account_number = {
  pattern: {
    value: /[0-9]{20}/,
    message: "Счет должен быть из 20 цифр",
  },
  //   validate: {
  //     isCorrect: (value: string, bik: string): boolean => {
  //       const valueToString = value ? value.toString() : "";
  //       if (checkBIK(bik)) {
  //         if (!/[^0-9]/.test(valueToString) && valueToString.length === 20) {
  //           const bikKs = "0" + bik.slice(4, 6) + valueToString;
  //           let checkSum = 0;
  //           const coefficients = [
  //             7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1,
  //           ];
  //           for (var i in coefficients) {
  //             checkSum += coefficients[i] * (Number(bikKs[i]) % 10);
  //           }
  //           return checkSum % 10 === 0;
  //         }
  //       }
  //       return false;
  //     },
  //   },
};
