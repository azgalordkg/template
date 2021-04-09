import React from "react";
import {Button} from "antd";

// @ts-ignore
export const ButtonComponent = ({text, type = "primary", danger = false}) => {
  // @ts-ignore
  return <Button type={type} danger={danger}>{text}</Button>;
};
