import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailYupRequired } from "@common/validation/index";
import { TEmail } from "@store/user/types";

export const schemaUpdateEmail = () => {
  return yupResolver<TEmail>(
    yup.object().shape({
      email: emailYupRequired,
    })
  );
};
