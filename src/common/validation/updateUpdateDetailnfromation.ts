import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TUpdateDetailInformationApartment } from "@store/apartment/types";

export const detaiInformationFields = {
  repair: yup.string(),
  gas: yup.string(),
  bathroom: yup.string(),
  city_phone: yup.string(),
  internet: yup.string(),
  safety: yup.string(),
  furniture: yup.string(),
  technics: yup.string(),
  flooring: yup.string(),
  miscellanea: yup.string(),
  balcony: yup.string(),
  location: yup.string(),
};

export const schemaUpdateDetailInformationApartment = () => {
  return yupResolver<TUpdateDetailInformationApartment>(
    yup.object().shape(detaiInformationFields)
  );
};
