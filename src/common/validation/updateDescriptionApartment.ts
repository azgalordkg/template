import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TUpdateDescriptionApartment } from "@store/apartment/types";

export const descriptionApartmentFields = {
  description: yup.string(),
};

export const updateDescriptionApartment = () => {
  return yupResolver<TUpdateDescriptionApartment>(
    yup.object().shape(descriptionApartmentFields)
  );
};
