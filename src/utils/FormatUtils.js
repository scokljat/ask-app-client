import format from "date-fns/format";

const FormatUtils = {
  formatDate(date, typeFormat) {
    return format(new Date(date), typeFormat);
  },
};
export default FormatUtils;
