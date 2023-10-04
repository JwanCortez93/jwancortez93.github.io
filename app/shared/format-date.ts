import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(customParseFormat);

export const formatDate = (date: string, format: string) => {
  if (date) {
    return dayjs.utc(date).format(format);
  }
  return dayjs.utc().format(format);
};
