import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { numberYupRequired, stringYupRequired } from "@common/validation/index";
import { TUpdatePriceAndTermsApartment } from "@store/apartment/types";

export const priceAndTermsFields = {
  cost: numberYupRequired
    .typeError("Цена должна быть числом.")
    .positive()
    .min(0),
  currency: stringYupRequired.required("Выберите валюту"),
};

export const schemaUpdatePriceAndTermsApartment = () => {
  return yupResolver<TUpdatePriceAndTermsApartment>(
    yup.object().shape(priceAndTermsFields)
  );
};
