import Router, { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

export const getQuery = (): ParsedUrlQuery => {
  const router = useRouter();
  return router.query;
};

export const setQuery = (values: ParsedUrlQuery) => {
  Router.push({
    query: values,
  });
};

export const openOnNewTab = (url: string) => {
  window.open(url, "_blank");
};
