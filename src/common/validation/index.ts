import * as yup from "yup";

export const stringYupRequired = yup
  .string()
  .required("Поле обязательно для заполенения");
export const numberYupRequired = yup
  .number()
  .required("Поле обязательно для заполенения");
export const emailYupRequired = yup
  .string()
  .email("Электронная почта должна быть действительной")
  .required("Поле обязательно для заполенения");
