import React from "react";
import { NextPage } from "next";
import { AppPropsType } from "next/dist/next-server/lib/utils";

import { wrapper } from "@store/store";

import "react-image-gallery/styles/scss/image-gallery.scss";
import "antd/dist/antd.css";
import "leaflet/dist/leaflet.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@common/styles/layout.scss";

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */
const CustomApp: NextPage<AppPropsType> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(CustomApp);
