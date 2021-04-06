import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { stringYupRequired } from "@common/validation/index";
import { TApartmentCreate } from "@components/CreatePage/types";

export const createApartmentFields = {
  ad_type: stringYupRequired,
  apartment_type: stringYupRequired,
  author_type: stringYupRequired,
};

export const schemaCreateApartment = () => {
  return yupResolver<TApartmentCreate>(
    yup.object().shape(createApartmentFields)
  );
};
