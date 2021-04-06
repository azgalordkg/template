import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { stringYupRequired } from "@common/validation/index";
import { TUpdatePasswordRequest } from "@store/user/types";

export const schemaUpdatePassword = () => {
  return yupResolver<TUpdatePasswordRequest>(
    yup.object().shape({
      password: stringYupRequired,
      new_password: stringYupRequired,
      repeat_password: stringYupRequired,
    })
  );
};
