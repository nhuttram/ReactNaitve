import moment from "moment";

export const formatDate = (date?: Date | string | number | null, format = "DD/MM/YYYY"): string => {
  // Check if a valid date is provided
  if (date) {
    // Check if the Moment.js object represents a valid date
    const momentDate = moment(date);
    if (momentDate.isValid()) {
      return momentDate.format(format);
    }
  }
  return "";
};
