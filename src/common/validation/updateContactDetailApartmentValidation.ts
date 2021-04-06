import { yupResolver } from "@hookform/resolvers/yup";
import { TContactDetailApartment } from "@store/apartment/types";
import * as yup from "yup";
import { emailYupRequired, stringYupRequired } from "@common/validation/index";
import { phoneNumRegExp } from "@common/validation/utils";

export const contactDetailFields = {
  phone: stringYupRequired.matches(phoneNumRegExp, "Неверный номер"),
  whatsapp: yup.string(),
  email: emailYupRequired,
};

const UpdateContactDetailApartmentValidation = () => {
  return yupResolver<TContactDetailApartment>(
    yup.object().shape(contactDetailFields)
  );
};

export default UpdateContactDetailApartmentValidation;
