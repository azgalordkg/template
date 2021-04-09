import React from "react";
import { Collapse } from 'antd';

const { Panel } = Collapse;

// @ts-ignore
export const AccordionComponent = ({onChange, defaultActiveKey = ["1"], content = []}) => {
  return (
    <Collapse defaultActiveKey={defaultActiveKey} onChange={onChange}>
      {content.map(({key, header, text}) => {
        return (
          <Panel header={header} key={key}>
            <p>{text}</p>
          </Panel>
        )
      })}
    </Collapse>
  );
};
