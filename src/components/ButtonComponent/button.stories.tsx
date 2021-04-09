import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import {ButtonComponent} from "@components/ButtonComponent/ButtonComponent";

export default {
  title: "ButtonComponent",
  component: ButtonComponent,
};

const Template: Story<ComponentProps<any>> = (args) => (
  <ButtonComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "Button",
};
