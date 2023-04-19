export const checkEmail = {
  pattern: {
    value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
    message: "Введите корректный email",
  },
};

export const checkInteger = {
  pattern: {
    value: /^[0-9]+$/,
    message: "Введите целое число",
  },
};

export const isINNLegalEntity = {
  pattern: {
    value: /^[0-9]+$/,
    message: "Введите целое число",
  },
  validate: {
    isCorrect: (value: number): boolean | string => {
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
        return getN(9) === dgt10 || "Введите корректный ИНН";
      }
      return false || "Введите корректный ИНН";
    },
  },
};

export const isKPP = {
  validate: {
    isCorrect: (value: number): boolean | string => {
      const valueToString = value ? value.toString() : "";
      if (valueToString.length !== 9) return false || "Введите КПП из 9 цифр";
      if (!valueToString.match(/\d{4}[\dA-Z][\dA-Z]\d{3}/))
        return false || "Введите корректный КПП";
      return true;
    },
  },
};
