import { format } from "date-fns";

export const formatDateToShort = (date: Date) => format(date, "dd MMM");
