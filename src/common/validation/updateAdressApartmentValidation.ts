import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { numberYupRequired, stringYupRequired } from "@common/validation/index";
import { TUpdateAddressApartment } from "@store/apartment/types";

export const addressApartmentFields = {
  city: stringYupRequired,
  district: yup.string(),
  street: stringYupRequired,
  crossing: yup.string(),
  latitude: numberYupRequired,
  longitude: numberYupRequired,
};

export const schemaUpdateAddressApartment = () => {
  return yupResolver<TUpdateAddressApartment>(
    yup.object().shape(addressApartmentFields)
  );
};
