import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import {Table} from "antd";
import { columns, dataSource } from "@components/TableComponent/constants";

export default {
  title: "TableComponent",
  component: Table,
};

const Template: Story<ComponentProps<any>> = (args) => (
  <Table {...args} dataSource={dataSource} columns={columns} />
);

export const Default = Template.bind({});
// Default.args = {
//   text: "Button",
// };
