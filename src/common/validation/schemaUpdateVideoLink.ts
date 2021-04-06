import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TUpdateVideoLink } from "@store/apartment/types";
import { videoLinkRegExp } from "@common/validation/utils";

export const videoLinkField = {
  video_link: yup.string().matches(videoLinkRegExp, "Неверная ссылка"),
};

export const schemaUpdateVideoLink = () => {
  return yupResolver<TUpdateVideoLink>(yup.object().shape(videoLinkField));
};
