import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { stringYupRequired } from "@common/validation/index";
import { TAuthRequest } from "@store/user/types";

export const schemaAuth = (isEmail?: boolean) => {
  return yupResolver<TAuthRequest>(
    yup.object().shape({
      username: isEmail ? stringYupRequired.email() : stringYupRequired,
      password: stringYupRequired,
    })
  );
};
