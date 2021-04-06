import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { stringYupRequired } from "@common/validation/index";
import { TFirstName } from "@store/user/types";

export const schemaUpdateName = () => {
  return yupResolver<TFirstName>(
    yup.object().shape({
      first_name: stringYupRequired,
    })
  );
};
