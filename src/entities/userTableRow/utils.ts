export const daysParser = (deferral_days: number): string => {
  if (
    deferral_days % 100 === 11 ||
    deferral_days % 100 === 12 ||
    deferral_days % 100 === 13 ||
    deferral_days % 100 === 14
  ) {
    return deferral_days + " дней";
  }
  if (deferral_days % 10 === 1) {
    return deferral_days + " день";
  }

  if (
    deferral_days % 10 === 2 ||
    deferral_days % 10 === 3 ||
    deferral_days % 10 === 4
  ) {
    return deferral_days + " дня";
  }

  return deferral_days + " дней";
};


export const dateParser = (date: string): string => {
    return date.split("T")[0].split("-").reverse().join(".");
}
