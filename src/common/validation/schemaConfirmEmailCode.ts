import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { stringYupRequired } from "@common/validation/index";
import { TConfirmEmailCode } from "@store/user/types";

export const schemaConfirmEmailCode = () => {
  return yupResolver<TConfirmEmailCode>(
    yup.object().shape({
      code: stringYupRequired,
    })
  );
};
