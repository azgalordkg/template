import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import {TableComponent} from "@components/TableComponent/TableComponent";
import { columns, dataSource } from "@components/constants";

export default {
  title: "TableComponent",
  component: TableComponent,
};

const Template: Story<ComponentProps<any>> = (args) => (
  <TableComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  columns,
  data: dataSource,
};
