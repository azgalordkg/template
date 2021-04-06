import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TEditApartmentField } from "@store/apartment/types";
import { createApartmentFields } from "@common/validation/createApartmentValication";
import { TFieldObj } from "@components/CreatePage/types";
import { generateAboutApartmentFields } from "@common/validation/schemaUpdateAboutApartment";
import { detaiInformationFields } from "@common/validation/updateUpdateDetailnfromation";
import { descriptionApartmentFields } from "@common/validation/updateDescriptionApartment";
import { addressApartmentFields } from "@common/validation/updateAdressApartmentValidation";
import { videoLinkField } from "@common/validation/schemaUpdateVideoLink";
import { priceAndTermsFields } from "@common/validation/updatePriceAndTermsValidation";
import { contactDetailFields } from "@common/validation/updateContactDetailApartmentValidation";

export type TSchemaEditApartment = {
  aboutFields: TFieldObj;
};

export const schemaEditApartment = ({ aboutFields }: TSchemaEditApartment) => {
  return yupResolver<TEditApartmentField>(
    yup.object().shape({
      ...createApartmentFields,
      ...generateAboutApartmentFields(aboutFields),
      ...detaiInformationFields,
      ...descriptionApartmentFields,
      ...addressApartmentFields,
      ...videoLinkField,
      ...priceAndTermsFields,
      ...contactDetailFields,
    })
  );
};
