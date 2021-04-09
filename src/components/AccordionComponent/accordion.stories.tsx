import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import {AccordionComponent } from "@components/AccordionComponent/AccordionComponent";
import { content } from "@components/constants";

export default {
  title: "AccordionComponent",
  component: AccordionComponent,
};

const Template: Story<ComponentProps<any>> = (args) => (
  <AccordionComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  content,
};
