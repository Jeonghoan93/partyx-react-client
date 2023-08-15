import addDays from "date-fns/addDays";

export const getDatesFromRange = (startDate: Date, endDate: Date) => {
  const dates = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    dates.push(currentDate.getTime());
    currentDate = addDays(currentDate, 1);
  }

  return dates;
};

export function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
