import { toast } from "react-hot-toast";

import { colors } from "../../globalStyles/GlobalStyles";

export const showToastMessage = (messageText, type) => {
  if (type === "error")
    toast.error(messageText, {
      style: {
        background: colors.lightRed,
        color: colors.gray,
      },
    });
  else
    toast.success(messageText, {
      style: {
        background: colors.green,
        color: colors.white,
      },
    });
};
