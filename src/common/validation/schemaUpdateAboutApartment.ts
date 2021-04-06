import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { numberYupRequired, stringYupRequired } from "@common/validation/index";
import { TUpdateApartmentAbout, TFieldObj } from "@components/CreatePage/types";
import _ from "lodash";

export const generateAboutApartmentFields = (fieldObj: TFieldObj) => {
  const fieldModel: { [key: string]: any } = {};
  for (const [key, value] of _.toPairs(fieldObj)) {
    if (["series", "heating", "build_type"].includes(key)) {
      fieldModel[key] = value ? stringYupRequired : yup.string();
    } else if ("inside_area_extra" === key) {
      fieldModel[key] = yup.object().shape({
        available: value ? numberYupRequired : yup.number(),
        kitchen: value ? numberYupRequired : yup.number(),
      });
    } else {
      fieldModel[key] = value ? numberYupRequired : yup.number();
    }
  }
  return fieldModel;
};

export const schemaUpdateAboutApartment = (fieldObj: TFieldObj) => {
  return yupResolver<TUpdateApartmentAbout>(
    yup.object().shape(generateAboutApartmentFields(fieldObj))
  );
};
