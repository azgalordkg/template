import React from "react";
import {Table} from "antd";

// @ts-ignore
export const TableComponent = ({data, columns}) => {
  return (
    <div className="table-component">
      <Table dataSource={data} columns={columns} />
    </div>
  );
};
